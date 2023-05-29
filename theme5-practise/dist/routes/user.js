"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/user/controllers");
const router = express_1.default.Router();
router.get('/', controllers_1.getUsersInfo);
router.get(':id', controllers_1.getUserInfoById);
router.put('/', controllers_1.createUser);
router.delete('/', controllers_1.deleteUserById);
router.post('/', controllers_1.updateUser);
exports.default = router;
