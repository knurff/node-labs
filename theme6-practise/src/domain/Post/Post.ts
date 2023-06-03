import {IPost, Text, UserID} from "./Post.types";

export class Post implements IPost{
    public id: string | undefined;
    public title: string;
    public dateCreation: string;
    public text: Text;
    public userId: UserID;

    constructor({id, title, text, dateCreation, userId}: IPost) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.dateCreation = dateCreation;
        this.userId = userId;
    }

}
