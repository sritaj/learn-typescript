"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
    Role[Role["DEV"] = 3] = "DEV";
    Role[Role["QE"] = 4] = "QE";
})(Role || (Role = {}));
let devAccess = Role.QE;
var Dept;
(function (Dept) {
    Dept[Dept["IT"] = 100] = "IT";
    Dept[Dept["OPERATIONS"] = 200] = "OPERATIONS";
    Dept[Dept["CLOUD"] = 300] = "CLOUD";
})(Dept || (Dept = {}));
