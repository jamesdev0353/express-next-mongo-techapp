import axios, { AxiosResponse } from "axios";
interface IResponseData {
  config: {};
  data: any[];
  headers: {};
  request: { XMLHttpRequest: {} };
  status: number;
  statusText: string;
}

export function fetchCurrentWeather(location: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: url,
    })
      .then((snapshot: AxiosResponse<IResponseData, IResponseData>) => {
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export function fetchCurrentWeather(location) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url)
//       .then((snapshot) => {
//         resolve(snapshot);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

export function fetchCurrentWeatherBool(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((snapshot) => {
        resolve("resolve");
      })
      .catch((err) => {
        resolve("reject");
      });
  });
}

// export { fetchCurrentWeather };
