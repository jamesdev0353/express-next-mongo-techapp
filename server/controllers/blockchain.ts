import axios from "axios";
import { Response, Request, RequestHandler } from "express";

const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "5000",
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
  },
  json: true,
  gzip: true,
};

const list: Array<any> = [];

export const getBlocks: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}`;
  try {
    axios
      .get(url)
      .then((result) => {
        const blockArray: Array<any> = result.data.data;
        blockArray.map((data: any) => list.push(data.symbol));
        res.send(result.data.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  } catch (error) {
    const typedError = error as Error;
    res.status(401).json({ message: typedError.message });
  }
};

// export const getBlocksDescr = async (req: any, res: any, value: any) => {
//   const dataAr: Array<any> = [];

//   list.map((value) => {
//     const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&symbol=${value}`;
//     try {
//       axios
//         .get(url)
//         .then((result) => {
//           const snap = JSON.stringify(result.data);
//           const obj = { name: value, descr: result.data.data.description };
//           console.log(obj);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error: any) {
//       res.status(401).json({ message: error.message });
//     }
//   });
// };

// export const getBlocks = async (req, res) => {
//   // const data = {};
//   try {
//     const url =
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}";
//     const func = async (url) => {
//       return new Promise((resolve, reject) => {
//         axios
//           .get(url)
//           .then((res) => {
//             // console.log("resolve", res.data);
//             // const data = res.data;
//             console.log(res.data, "adsasddsa");
//             // return res.data;
//             // r;
//             // resolve(res.data);
//           })
//           .catch((err) => {
//             console.log(err);
//             // reject(err);
//           });
//       });
//     };

//     // };
//   } catch (err) {
//     res.status(401).json({ message: err.message });
//   }
// };
