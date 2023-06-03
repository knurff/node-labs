import { Request, Response } from 'express';
import NodeCache from "node-cache";
import UserService from "../../domain/User/User.service";
import {UserRepository} from "../../repository/UserRepository";
import User from "../../domain/User/User";
import {idT} from "../../domain/User/User.types";

const userRepository = new UserRepository()
const userService = new UserService(userRepository)

export const createUser = async (req: Request, res: Response): Promise<Response<any>> => {

    try {
        const { address, age, email, info, username, name, posts } = req.body as any;
        if (!username) return res.status(400).json({ message: "username is empty" });

        const user = await userService.findByUsername(username);
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = new User({email, info, name, username, age, address, posts, id: undefined, });
        await userService.create(newUser);

        return res.status(200).json({ message: 'OK' });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Internal error' });
    }
};



export const getUserInfoById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.query as { id: string };
        const user = await userService.findById(id);

        if (user) {
            return res.status(200).json({ user });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: 'Bad request' });
    }
};

export const deleteUserById = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const { id } = req.body as { id: idT };

        const user = await userService.findById(id!);
        if (user) {
            await userService.delete(id!);
            return res.status(200).json({ message: `User with ID ${id} has been deleted` });
        } else {
            return res.status(404).json({ error: `User with ID ${id} does not exist` });
        }
    } catch (e) {
        return res.status(400).json({ error: 'Bad request' });
    }
};
export const updateUser = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const { id, ...toUpdate } = req.body as any;

        const user = await userService.findById(id);
        if (user) {
            await userService.update(Object.assign(user, toUpdate));
            return res.status(200).json({message: 'ok' });
        } else {
            return res.status(404).json({ error: `User with ID ${id} does not exist` });
        }
    } catch (e) {
        return res.status(500).json(e);
    }
};

export const findAllUsers = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const { page = 1, pageSize = 10, age, city, postTitle } = req.query;

        const users = await userService.findAllUsers(+page, +pageSize, age as number, city as string, postTitle as string);

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};
