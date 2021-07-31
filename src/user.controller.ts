import express from 'express';
import cognitoUserPoolHelper from './cognito.user.pool.helper';
import { IAuthenticatedRequest } from './auth.middleware';

interface IUserController {
  signUp: express.Handler,
  signIn: express.Handler,
  confirmSignUp: express.Handler,
  getProfile: express.Handler,
}


const userController: IUserController = {
  signUp: async (req, res) => {
    try {
      const { password, email } = req.body;
      const result = await cognitoUserPoolHelper.signUp({ email, password });
      res.json({ message: `${result} is created.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  confirmSignUp: async (req, res) => {
    try {
      const { email, code } = req.body;
      const result = await cognitoUserPoolHelper.confirmSignUp({ email, code });
      res.json({ message: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await cognitoUserPoolHelper.signIn({ email, password });
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getProfile: (req: IAuthenticatedRequest, res) => {
    res.json(req.user);
  },
};

export default userController;
