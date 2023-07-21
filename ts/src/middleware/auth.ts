import { NextFunction, Request, Response } from "express";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;
  switch (token) {
    case token === "12345":
      next();
      break;
    case token != "12345":
      res.status(401).send("Unauthorized");
      break;
    default:
      res.status(400).json({ error: "Token is required" })
      break;
  }

};
export default auth;