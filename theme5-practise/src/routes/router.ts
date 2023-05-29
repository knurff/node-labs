import express from "express";
import {default as usersRouter} from '../routes/user'
const router = express.Router()

router.use('/user', usersRouter)

export default router
