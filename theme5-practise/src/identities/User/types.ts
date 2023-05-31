import User from "./User";

export type idT = Required<string>
export type usernameT = Required<string>
export type nameT = Partial<string>
export type valuesT = {id: idT, username: usernameT, name: nameT}
export type credentialsT = Omit<valuesT, 'id'>
export type usersT = User[]

