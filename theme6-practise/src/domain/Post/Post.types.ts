import {idT} from "../User/User.types";

export type PostID = Required<string> | undefined
export type DateCreation = Required<string>
export type Title = Required<string>
export type Text = Required<string>
export type UserID = idT

export interface IPost {
    id: PostID,
    dateCreation: DateCreation,
    title: Title,
    text: Text
    userId: UserID
}
