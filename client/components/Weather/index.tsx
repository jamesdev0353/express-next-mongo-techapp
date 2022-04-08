import React, { useEffect, useState } from "react";
import styles from "./../styles/Weather.module.scss";
import Map from "./Map";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Avatar,
} from "@material-ui/core/";
import CardMedia from "@mui/material/CardMedia";

import WeatherForm from "./WeatherForm";

import {
  fetchCurrentWeather,
  fetchCurrentWeatherBool,
} from "./../../apis/Weather/api";

interface IWeatherData {
  type: boolean;
  descr: string;
  main: string;
  windSpeed: string;
  windDeg: string;
  temp: number;
  imgMain: string;
  lati: number;
  long: number;
  zoom: number;
}

const initalState: IWeatherData = {
  type: false,
  descr: "",
  main: "",
  windSpeed: "",
  windDeg: "",
  temp: 0,
  imgMain: "",
  lati: 0,
  long: 0,
  zoom: 10,
};

function Weather() {
  const [weatherData, setWeatherData] = useState(initalState);
  const list = [];
  const pull_data = async (location: string) => {
    const data = fetchCurrentWeather(location);
    await data.then(function (result) {
      list.push(result);
    });
    list.splice(0, list.length);

    const bool = await fetchCurrentWeatherBool(location);
    if (bool === "resolve") {
      const data = await fetchCurrentWeather(location);
      list.push(data);
      setWeatherData({
        ...weatherData,
        type: true,
        descr: list[0].data.weather[0].description,
        main: list[0].data.weather[0].main,
        windSpeed: list[0].data.wind.speed,
        windDeg: list[0].data.wind.deg,
        temp: list[0].data.main.temp - 273.15,
        imgMain: `http://openweathermap.org/img/wn/${list[0].data.weather[0].icon}@2x.png`,
        lati: list[0].data.coord.lat,
        long: list[0].data.coord.lon,
        zoom: 10,
      });
    } else {
      setWeatherData({ ...weatherData, type: false });
      fetchCurrentWeather("athens");
    }
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        title="cryptotitle"
        component="img"
        src="https://image.shutterstock.com/mosaic_250/507955/281515874/stock-photo-weather-forecast-background-variety-weather-conditions-bright-sun-and-blue-sky-dark-stormy-sky-281515874.jpg"
        className={styles.media}
      />
      <WeatherForm func={pull_data} />

      <Typography variant="h6" className={styles.overlay}>
        <Typography variant="body2">weather</Typography>
      </Typography>
      {!weatherData.type ? (
        <CircularProgress />
      ) : (
        <>
          <Typography className={styles.title} variant="h6" gutterBottom>
            wind: {weatherData.windSpeed}, deg: {weatherData.windDeg}&#176;
            <Typography className={styles.arrow} variant="body1">
              <ArrowRightAltIcon
                style={{
                  transform: `rotate(${weatherData.windDeg + 90}deg)`,
                }}
              />
            </Typography>
          </Typography>

          <Typography className={styles.title} variant="body2" gutterBottom>
            temperature: {weatherData.temp.toFixed(2)} &#176;C
          </Typography>
          <Typography className={styles.title} variant="caption" gutterBottom>
            description: {weatherData.descr}, {weatherData.main}
            <Avatar src={weatherData.imgMain} />
          </Typography>
          <Map
            latitude={weatherData.lati}
            longitude={weatherData.long}
            zoom={weatherData.zoom}
          />
        </>
      )}
      <CardContent>
        <Typography variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus
          ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse
          congue vulputate lobortis. Pellentesque at interdum tortor. Quisque
          arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam
          ultricies a ligula nec faucibus. In elit metus, efficitur lobortis
          nisi quis, molestie porttitor metus. Pellentesque et neque risus.
          Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula
          urna, nec feugiat quam lectus vitae ex.
        </Typography>
      </CardContent>
    </Card>
  );
}




export default Weather;
