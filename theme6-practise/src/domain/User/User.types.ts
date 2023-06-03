import User from "./User";
import {PostEntity} from "../../entities/PostEntity";

export type idT = Required<string> | undefined
export type usernameT = Required<string>
export type nameT = Partial<string>
export type emailT = Required<string>
export type ageT = Required<number>
export type cityT = Required<string>
export type streetT = Required<string>
export type infoT = Partial<string>
export type addressT = Record<string, cityT | streetT>
export type postsT = Partial<PostEntity[]> | undefined
export interface IUser {
    id: idT,
    username: usernameT,
    name: nameT,
    age: ageT,
    email: emailT,
    address: addressT,
    info: infoT
    posts: postsT
}

