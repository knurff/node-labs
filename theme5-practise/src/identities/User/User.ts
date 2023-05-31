import {credentialsT, idT, nameT, usernameT, valuesT} from "./types";
import {randomUUID} from "crypto";

class User {
    public id: Required<idT>
    private credentials: credentialsT

    constructor(username: usernameT, name: nameT) {
        this.id = randomUUID()
        this.credentials = {username, name}
    }
    public getValues (): valuesT {
        return Object.assign({id: this.id}, this.credentials)
    }
    public setValues (newValues: Pick<valuesT, 'username' | 'name'>): void {
        this.credentials = Object.assign(this.credentials, newValues)
    }
}

export default User
