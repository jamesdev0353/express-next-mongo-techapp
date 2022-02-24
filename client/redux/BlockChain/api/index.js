import axios from "axios";

const url = "http://localhost:3000/blog/blockchain/api";

export const fetchCryptos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((snapshot) => {
        // console.log(snapshot, "snapshot");
        console.log("resolve");

        // console.log(resolve.snapshot)
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// const config = {

// };


// export const fetchCurrentCryptoDesc  = () => {

//     axios({
//       method: "GET",
//       url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f&symbol=ADA`,
//       headers: {
//         "Content-type": "application/json",
//         "Access-Control-Allow-Origin": "origin-list",
//         "Access-Control-Allow-Origin":
//           "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f&symbol=ADA",
//       },
//       // params,
//     })
//       .then((snapshot) => {
//         console.log(snapshot.json());

//         return snapshot;
//       })
//       .catch((err) => {
//         return err;
//       });
// };




export function getCryptoVal(value) {

  console.log(value, "vlaue")
  return value

};

// export const fetchProjects = () => axios.get(url);


