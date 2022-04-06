import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IPropRequest extends Request {
  userId: string;
}

const auth = async (req: IPropRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData: any;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (err) {}
};

export default auth;
