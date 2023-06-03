import {addressT, ageT, emailT, idT, infoT, IUser, nameT, postsT, usernameT} from "./User.types";


class User implements IUser {
    public id: idT;
    public address: addressT;
    public age: ageT;
    public email: emailT;
    public info: infoT;
    public name: nameT;
    public posts: postsT;
    public username: usernameT;

    constructor({id, age, address, info, name, username, posts, email}: IUser) {
        this.id = id;
        this.age = age;
        this.address = address;
        this.info = info;
        this.name= name;
        this.username = username;
        this.posts = posts;
        this.email = email;
    }


}

export default User
