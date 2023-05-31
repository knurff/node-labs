import express from "express";
import {createUser, deleteUserById, getUserInfoById, getUsersInfo, updateUser} from "../controllers/user/controllers";

const router = express.Router()

router.get('/', getUsersInfo)
router.get(':id', getUserInfoById)
router.put('/', createUser)
router.delete('/', deleteUserById)
router.post('/', updateUser)

export default router
