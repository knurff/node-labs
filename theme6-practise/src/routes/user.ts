import express from "express";
import {createUser, deleteUserById, findAllUsers, getUserInfoById, updateUser} from "../controllers/user/controllers";

const router = express.Router()

router.get('', getUserInfoById)
router.get('/all', findAllUsers)
router.put('', createUser)
router.delete('', deleteUserById)
router.post('', updateUser)

export default router
