import express from "express";
import {default as usersRouter} from '../routes/user'
import {default as postRouter} from '../routes/post'
const router = express.Router()

router.use('/user', usersRouter)
router.use('/post', postRouter)

export default router
