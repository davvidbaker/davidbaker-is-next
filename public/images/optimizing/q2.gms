sets
    m "machines" /X1, X2/
    b "jellybean colors" /yellow, blue, green, orange, purple/
    m_b(m, b) "valid combinations of m and b"
;

alias(b,bb);

* To start, all combinations are valid
m_b(m,b) = yes;

parameters
    r(b) "net revenue per jellybean of color b [$/bean]"
    /
    yellow 1
    blue 1.05
    green 1.07
    orange 0.95
    purple 0.9
    /
;

scalars
    hbar "maximum hours a machine can run in a week [hours]"
    /40/

    pbar "Maximum number of jellybeans produced by a machine over an hour [beans/hour]"
    /100/
;

* counterfactual switches
scalar sw_fivepercent "boolean switch to turn on and off 5% deviation constraint" /0/ ; 
scalar sw_coloredmachines "boolean switch to turn on and off machine color restrictions" /0/ ; 

* Some combinations are not valid
* TODO: How would I go about making this dynamic so I don't need to do this down bleow.
m_b("X1", "orange")$sw_coloredmachines = no;
m_b("X1", "purple")$sw_coloredmachines = no;
m_b("X2", "blue")$sw_coloredmachines = no;
m_b("X2", "green")$sw_coloredmachines = no;

positive variable X(m,b) "quantity of jellybean b produced by machine m [beans]";

variable Z "objective function value";

equations 
    objfn "target of our optimization",
    eq_weekly_machine_production(m) "jellybean production limit over a week for each machine"
    eq_prodlimit_lower(b,bb) "production for bean b must be greater than or equal to than 95% of bb"
    eq_prodlimit_upper(b,bb) "production for bean b must be less than or equal to than 105% of bb"
;

objfn.. Z =e= sum((m,b)$m_b(m,b), r(b)*X(m,b));

eq_weekly_machine_production(m).. hbar*pbar =g= sum(b, X(m,b));

eq_prodlimit_lower(b,bb)$sw_fivepercent.. sum(m, X(m,b)) =g= 0.95*sum(m, X(m, bb));
eq_prodlimit_upper(b,bb)$sw_fivepercent.. sum(m, X(m,b)) =l= 1.05*sum(m, X(m, bb));

model jellybeans /all/;

parameters rep_x, rep_z, rep_bean_totals;

* CASE 1: business as usual
solve jellybeans using LP maximizing Z;
rep_bean_totals(b, "bau") = sum(m, X.l(m,b));
rep_x(m,b, "bau") = X.l(m,b);
rep_z("bau") = Z.l;

* CASE 2: all bean production within 5%
sw_fivepercent = 1;
solve jellybeans using LP maximizing Z;
rep_bean_totals(b, "5%") = sum(m, X.l(m,b));
rep_x(m,b, "5%") = X.l(m,b);
rep_z("5%") = Z.l;

* CASE 3: machines are restricted on what colors they can produce
sw_coloredmachines = 1;
* * Some combinations are not valid
m_b("X1", "orange")$sw_coloredmachines = no;
m_b("X1", "purple")$sw_coloredmachines = no;

m_b("X2", "blue")$sw_coloredmachines = no;
m_b("X2", "green")$sw_coloredmachines = no;

solve jellybeans using LP maximizing Z;
rep_bean_totals(b, "5% and color restrictions") = sum(m, X.l(m,b));
rep_x(m,b, "5% and color restrictions") = X.l(m,b);
rep_z("5% and color restrictions") = Z.l;


execute_unload 'hw1/jellybeans.gdx' ; 