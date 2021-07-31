import { Router} from "express";
import userController from "./user.controller";

const router = Router();

router.post('/signup', userController.signUp);

router.post('/signup/confirm', userController.confirmSignUp);

router.post('/signin', userController.signIn);

router.get('/profile', userController.getProfile);

export default router;
