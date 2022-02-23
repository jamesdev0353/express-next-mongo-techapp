var jwt = require("jsonwebtoken");

const auth = async (req: any, res: any, next: any) => {
  try {
    // console.log(logInUser(), "those headers");

    // console.log(req, "those headers");
    // const token = res.headers.test.split(" ")[1];
    const token = req.headers.test.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

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
