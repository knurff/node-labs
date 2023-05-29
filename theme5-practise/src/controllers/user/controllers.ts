import {credentialsT, idT, valuesT} from "../../identities/User/types";
import {users} from "../../server";
import { Request, Response } from 'express';
import User from "../../identities/User/User";
import {findUserById, findUserByUsername, getUserIndexById} from "../../services/user";
import NodeCache from "node-cache";

const cache = new NodeCache()

export const createUser = (req: Request, res: Response): Response<any> => {
    try {
        const {username, name} = req.body as credentialsT
        if (!username) return res.status(400).json({message: "username is empty"})
        if (Boolean(findUserByUsername(username))) {
            return res.status(400).json({error: 'User already exists'})
        }
        const newUser = new User(username, name);
        users.push(newUser)
        const cachedUsersInfo = cache.get('usersInfo') as valuesT[] | undefined;
        if (cachedUsersInfo) {
            cache.set('usersInfo', [...cachedUsersInfo, newUser.getValues()])
        }
        return res.status(200).json({message: 'OK'})
    }
    catch (e) {
        return res.status(500).json({ error: 'Internal error' })

    }
}


export const getUserInfoById = (req: Request, res: Response): Response<any> => {
    try {
        const {id} = req.query as {id: idT}
        const cachedUserInfo = cache.get(id);
        if (cachedUserInfo) {
            return res.status(200).json({ user: cachedUserInfo })
        }
        const user = findUserById(id)
        cache.set(id, user);
        if (!Boolean(user)) {
            return res.status(404).json({ error: 'User not found' })
        }
        else {
            return res.status(200).json({user: user!.getValues()})
        }


    }
    catch (e) {
        return res.status(400).json({ error: 'Bad request' });

    }

}

export const getUsersInfo = (req: Request, res: Response): Response<any> => {
    try {
        const cachedUsersInfo = cache.get('usersInfo');
        if (cachedUsersInfo) {
            return res.status(200).json({ usersInfo: cachedUsersInfo })
        }
        const usersInfo: valuesT[] = users.map(user => user.getValues())
        cache.set('usersInfo', usersInfo);
        return res.status(200).json({usersInfo})
    }
    catch (e) {
        return res.status(500).json(e)
    }
}
export const deleteUserById = (req: Request, res: Response): Response<any> => {
    try {
        const {id} = req.body as {id: idT}
        if (Boolean(findUserById(id))){
            const userIndex = users.findIndex(user => user.id === id)
            users.splice(userIndex, 1)
            return res.status(200).json({message: `user with id ${id} has been deleted`})
        }
        else {
            return res.status(400).json({message: `user with id ${id} does not exist`})
        }
    }
    catch (e) {
        return res.status(400).json({ error: 'Bad request' });
    }

}
export const updateUser = (req: Request, res: Response): Response<any> => {
    try {
        const {id, ...credentials} = req.body as valuesT
        const userIndex = getUserIndexById(id)
        const user = users[userIndex]
        if (userIndex > -1) {
            user.setValues(credentials)
            const cachedUserInfo = cache.get(id) as valuesT | undefined;
            if (cachedUserInfo) {
                const updatedUserInfo = { ...cachedUserInfo, ...credentials }
                cache.set(id, updatedUserInfo);
            }
            return res.status(200).json({user: user})
        }
        else return res.status(400).json({message: `user with id ${id} does not exist`})
    }
    catch (e){
        return res.status(500).json(e)
    }

}
