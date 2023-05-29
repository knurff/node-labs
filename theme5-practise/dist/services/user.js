"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIndexById = exports.findUserById = exports.findUserByUsername = void 0;
const server_1 = require("../server");
const findUserByUsername = (usrname) => {
    return server_1.users.find(user => user.getValues().username === usrname);
};
exports.findUserByUsername = findUserByUsername;
const findUserById = (id) => server_1.users.find((user) => user.id === id);
exports.findUserById = findUserById;
const getUserIndexById = (id) => {
    return server_1.users.findIndex(user => user.id === id);
};
exports.getUserIndexById = getUserIndexById;
