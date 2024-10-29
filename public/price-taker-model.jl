using JuMP
import GAMS

# In this formulation I am using only a single LMP, defined exogenously,
# but in the future different storage units will have different price signals according 
# to their location.

model = Model(GAMS.Optimizer)
set_optimizer_attribute(model, "solver", "CPLEX")

# =============================================================
# SETS
num_storage_units = 9 # number of units for now
num_time_steps = 31 * 24 # only one month for now
S = 1:num_storage_units # energy storage units
T = 1:num_time_steps # time steps (hours)

# =============================================================
# PARAMETERS
storage_duration = [4, 5, 6, 7, 8, 9, 10, 11, 12] # hours
storage_rating = 20 # rating in MW

c = LMPs[1:num_time_steps] # these LMPs come from a different model [$/MW]
e₁ˡᵉᵛᵉˡ = [0 for s ∈ S] # initial energy levels [MWh]
Δ̄ₛᶜ = Δ̄ₛᵈ = [storage_rating for s ∈ S] # charge/discharge in 1 hour [MWh]
ēˡᵉᵛᵉˡ = storage_duration .* Δ̄ₛᶜ # storage unit max energy level [MWh]
e̲ˡᵉᵛᵉˡ = [0 for s ∈ S] # storage unit min energy level [MWh]
ηᵈ = [0.9 for s ∈ S] # discharging efficiency
ηᶜ = [0.95 for s ∈ S] # charging efficiency

# =============================================================
# DECISION VARIABLES
@variable(model, Eᵈ[S, T] ≥ 0) # Energy discharged (sold) by unit s at time t [MWh]
@variable(model, Eᶜ[S, T] ≥ 0) # Energy charged (purchased) by unit s at time t [MWh]
@variable(model, Eˡᵉᵛᵉˡ[S, T] ≥ 0) # Energy level in MWh of unit s at time t (like SOC but not a percent) 
@variable(model, B[S, T], Bin) # binary variable indicating if unit s is charging at time t (= 1 when charging)

# =============================================================
# OBJECTIVE
profit(s, t) = c[t] * Eᵈ[s, t] - c[t] * Eᶜ[s, t]
@objective(model, Max, sum(profit(s, t) for s ∈ S, t ∈ T)) # maximize profits over all units and all time

# =============================================================
# CONSTRAINTS
@constraint(model, [s ∈ S, t ∈ T], e̲ˡᵉᵛᵉˡ[s] ≤ Eˡᵉᵛᵉˡ[s, t] ≤ ēˡᵉᵛᵉˡ[s]) # energy level bounds
@constraint(
    model,
    [s ∈ S, t ∈ T[1:end-1]],
    Eˡᵉᵛᵉˡ[s, t+1] == Eˡᵉᵛᵉˡ[s, t] + ηᶜ[s] * Eᶜ[s, t] - (Eᵈ[s, t] / ηᵈ[s]) # energy balance
)
@constraint(model, [s ∈ S, t ∈ T], Eᶜ[s, t] <= Δ̄ₛᶜ[s] * B[s, t])        # charging limit, charging only when b[s, t] = 1
@constraint(model, [s ∈ S, t ∈ T], Eᵈ[s, t] <= Δ̄ₛᵈ[s] * (1 - B[s, t]))  # discharging limit, discharging only when b[s, t] = 0
for s ∈ S
    fix(Eˡᵉᵛᵉˡ[s, 1], e₁ˡᵉᵛᵉˡ[s]; force=true) # initial conditions for storage units
end

optimize!(model)