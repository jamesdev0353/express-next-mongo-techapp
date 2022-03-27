import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IPropRequest extends Request {
  userId: string;
}

const auth = async (req: IPropRequest, res: Response, next: NextFunction) => {
  try {
    console.log(req);
    // console.log(req.headers, "those headers");
    console.log(req.headers.authorization, "those headers");
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData: any;
    console.log();
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;
