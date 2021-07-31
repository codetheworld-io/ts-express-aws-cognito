import express from "express";

interface IUserController {
  signUp: express.Handler,
  signIn: express.Handler,
  confirmSignUp: express.Handler,
  getProfile: express.Handler,
}

const userController: IUserController = {
  signUp: (req, res) => {
    res.json(req.body);
  },
  signIn: (req, res) => {
    res.json(req.body);
  },
  confirmSignUp: (req, res) => {
    res.json(req.body);
  },
  getProfile: (req, res) => {
    res.json({});
  },
};

export default userController;
