"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUserById = exports.getUsersInfo = exports.getUserInfoById = exports.createUser = void 0;
const server_1 = require("../../server");
const User_1 = __importDefault(require("../../identities/User/User"));
const user_1 = require("../../services/user");
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default();
const createUser = (req, res) => {
    try {
        const { username, name } = req.body;
        if (!username)
            return res.status(400).json({ message: "username is empty" });
        if (Boolean((0, user_1.findUserByUsername)(username))) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const newUser = new User_1.default(username, name);
        server_1.users.push(newUser);
        const cachedUsersInfo = cache.get('usersInfo');
        if (cachedUsersInfo) {
            cache.set('usersInfo', [...cachedUsersInfo, newUser.getValues()]);
        }
        return res.status(200).json({ message: 'OK' });
    }
    catch (e) {
        return res.status(500).json({ error: 'Internal error' });
    }
};
exports.createUser = createUser;
const getUserInfoById = (req, res) => {
    try {
        const { id } = req.query;
        const cachedUserInfo = cache.get(id);
        if (cachedUserInfo) {
            return res.status(200).json({ user: cachedUserInfo });
        }
        const user = (0, user_1.findUserById)(id);
        cache.set(id, user);
        if (!Boolean(user)) {
            return res.status(404).json({ error: 'User not found' });
        }
        else {
            return res.status(200).json({ user: user.getValues() });
        }
    }
    catch (e) {
        return res.status(400).json({ error: 'Bad request' });
    }
};
exports.getUserInfoById = getUserInfoById;
const getUsersInfo = (req, res) => {
    try {
        const cachedUsersInfo = cache.get('usersInfo');
        if (cachedUsersInfo) {
            return res.status(200).json({ usersInfo: cachedUsersInfo });
        }
        const usersInfo = server_1.users.map(user => user.getValues());
        cache.set('usersInfo', usersInfo);
        return res.status(200).json({ usersInfo });
    }
    catch (e) {
        return res.status(500).json(e);
    }
};
exports.getUsersInfo = getUsersInfo;
const deleteUserById = (req, res) => {
    try {
        const { id } = req.body;
        if (Boolean((0, user_1.findUserById)(id))) {
            const userIndex = server_1.users.findIndex(user => user.id === id);
            server_1.users.splice(userIndex, 1);
            return res.status(200).json({ message: `user with id ${id} has been deleted` });
        }
        else {
            return res.status(400).json({ message: `user with id ${id} does not exist` });
        }
    }
    catch (e) {
        return res.status(400).json({ error: 'Bad request' });
    }
};
exports.deleteUserById = deleteUserById;
const updateUser = (req, res) => {
    try {
        const _a = req.body, { id } = _a, credentials = __rest(_a, ["id"]);
        const userIndex = (0, user_1.getUserIndexById)(id);
        const user = server_1.users[userIndex];
        if (userIndex > -1) {
            user.setValues(credentials);
            const cachedUserInfo = cache.get(id);
            if (cachedUserInfo) {
                const updatedUserInfo = Object.assign(Object.assign({}, cachedUserInfo), credentials);
                cache.set(id, updatedUserInfo);
            }
            return res.status(200).json({ user: user });
        }
        else
            return res.status(400).json({ message: `user with id ${id} does not exist` });
    }
    catch (e) {
        return res.status(500).json(e);
    }
};
exports.updateUser = updateUser;
