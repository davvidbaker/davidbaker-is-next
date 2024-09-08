set i /rolls, croissants, bread_loafs/;

parameters
    r(i) "revenue [$/item]"
    /
    rolls 2
    croissants 5
    bread_loafs 10
    /

    c(i) "cost per item [$/item]"
    /
    rolls 1.5
    croissants 2
    bread_loafs 5
    /

    h(i) "time per item [hours/item]"
    /
    rolls 1
    croissants 2
    bread_loafs 5
    /
;

scalar    
    hbar "maximum working hours in a week [hours]"
    /40/
;

positive variables X(i) "quantity of baked good i baked [items]";

variables Z "objective function value";

equations 
    objfn "target of our optimization",
    eq_hourlimit "can only work so many hours in a week",
    eq_combo "rolls production must be greater than or equal to croissant production"
;

scalar sw_combo "boolean switch to turn on and off the combo constraint (rolls and croissants)" /0/ ; 

objfn.. Z =e= sum(i, (r(i) - c(i)) * X(i) ) ;

eq_hourlimit.. hbar =g= sum(i, h(i) * X(i) ) ; 
eq_combo$sw_combo.. X("rolls") =g= X("croissants") ; 

model bakery /all/;

parameters rep_x, rep_z;

solve bakery using lp maximizing Z;
* adding 0.0000001 so the value still gets exported
rep_x(i, "business as usual") = X.l(i) + 0.0000001;
rep_z("business as usual") = Z.l;

sw_combo = 1;
solve bakery using lp maximizing Z;
* adding 0.0000001 so the value still gets exported
rep_x(i, "combo") = X.l(i) + 0.0000001;
rep_z("combo") = Z.l;

execute_unload 'gams-output/bakery.gdx' ; 