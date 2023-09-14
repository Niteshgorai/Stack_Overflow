import express from 'express'

import {postAnswer} from '../controllers/Answers.js'
import {deleteAnswer} from '../controllers/Answers.js'
import auth from "../middleware/auth.js";

const router= express.Router();

router.patch('/post/:id', postAnswer)
router.patch("/delete/:id", auth, deleteAnswer);
export default router;