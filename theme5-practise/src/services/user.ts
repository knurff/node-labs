import {idT, usernameT} from "../identities/User/types";
import User from "../identities/User/User";
import {users} from "../server";

export const findUserByUsername = (usrname: usernameT): User | undefined => {
    return users.find(user => user.getValues().username === usrname)
}
export const findUserById = (id: idT): User | undefined => users.find((user) => user.id === id);

export const getUserIndexById = (id: idT): number => {
    return users.findIndex(user => user.id === id)
}
