import axios from "axios";
import { useQuery } from "react-query";

const url = "http://localhost:3000/blog/blockchain/api";

export const fetchCryptos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((snapshot) => {
        console.log("resolve");
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export function getCryptoVal(value) {
  console.log(value, "vlaue");
  return value;
}

// const config = {

// };

export const fetchCurrentCryptoDesc = () => {
  axios({
    method: "GET",
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f&symbol=ADA`,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "origin-list",
      // "Access-Control-Allow-Origin":
      //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f&symbol=ADA",
    },
    // params,
  })
    .then((snapshot) => {
      console.log(snapshot);

      return snapshot;
    })
    .catch((err) => {
      return err;
    });
};

export const useCryptoData = (
  onSuccess: (param: any) => void,
  onError: (param: Error) => void
) => {
  return useQuery("cryptos", fetchCryptos, {
    onSuccess,
    onError,
  });
};

// export const fetchProjects = () => axios.get(url);
