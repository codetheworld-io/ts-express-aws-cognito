import { Router} from "express";
import userController from "./user.controller";
import authMiddleware from './auth.middleware';

const router = Router();

router.post('/signup', userController.signUp);

router.post('/signup/confirm', userController.confirmSignUp);

router.post('/signin', userController.signIn);

router.get('/profile', authMiddleware, userController.getProfile);

export default router;
