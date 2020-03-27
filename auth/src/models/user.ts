import { ObjectID } from "mongodb";

export interface IUser {
    _id?: ObjectID;
    username: string;
    password?: string;
    favs: any[];
}

export default class User {
    _id = new ObjectID();
    username: string;
    password?: string;
    favs: any[];

    constructor(props: IUser) {
        this.username = props.username;
        this.password = props.password;
        this.favs = props.favs;
    }
}