"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class User {
    constructor(username, name) {
        this.id = (0, crypto_1.randomUUID)();
        this.credentials = { username, name };
    }
    getValues() {
        return Object.assign({ id: this.id }, this.credentials);
    }
    setValues(newValues) {
        this.credentials = Object.assign(this.credentials, newValues);
    }
}
exports.default = User;
