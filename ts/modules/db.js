"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = exports.getData = void 0;
var dbUrl = 'xxxx';
function getData() {
    console.log("Get data from Database");
}
exports.getData = getData;
var Db;
(function (Db) {
    class Users {
        static getData() {
            console.log("Get data from Users");
        }
    }
    Db.Users = Users;
})(Db = exports.Db || (exports.Db = {}));
