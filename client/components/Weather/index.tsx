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
} from "../../redux/Weather/api/index";

function Weather() {
  const [type, setType] = useState(false);
  const [descr, setDescr] = useState("");
  const [main, setMain] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDeg, setWindDeg] = useState("");
  const [temp, setTemp] = useState("");
  const [imgMain, setImgMain] = useState("");
  const [lati, setLati] = useState(37.9795);
  const [long, setLong] = useState(23.7162);
  const [zoom, setZoom] = useState(10);

  const list = [];

  const pull_data = async (location) => {
    // const data = fetchCurrentWeather(location);
    // await data.then(function (result) {
    //   // setType(true);
    //   // setList({ ...result });
    //   list.push(result);
    //   console.log(list);
    //   // console.log(data);
    // });
    list.splice(0, list.length);

    const bool = await fetchCurrentWeatherBool(location);
    if (bool === "resolve") {
      const data = await fetchCurrentWeather(location);
      setType(true);
      list.push(data);
      setDescr(list[0].data.weather[0].description);
      setMain(list[0].data.weather[0].main);
      setImgMain(
        `http://openweathermap.org/img/wn/${list[0].data.weather[0].icon}@2x.png`
      );
      setWindSpeed(list[0].data.wind.speed);
      setWindDeg(list[0].data.wind.deg);
      setTemp(list[0].data.main.temp - 273.15);
      console.log(list[0].data.coord.lat, list[0].data.coord.lon);
      setLati(list[0].data.coord.lat);
      setLong(list[0].data.coord.lon);
    } else {
      setType(false);
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
      {!type ? (
        <CircularProgress />
      ) : (
        <>
          <Typography className={styles.title} variant="h6" gutterBottom>
            wind: {windSpeed}, deg: {windDeg}&#176;
            <Typography className={styles.arrow} variant="body1">
              <ArrowRightAltIcon
                style={{
                  transform: `rotate(${windDeg + 90}deg)`,
                }}
              />
            </Typography>
          </Typography>

          <Typography className={styles.title} variant="body2" gutterBottom>
            temperature: {parseFloat(temp).toFixed(2)} &#176;C
          </Typography>
          <Typography className={styles.title} variant="caption" gutterBottom>
            description: {descr}, {main}
            <Avatar src={imgMain} />
          </Typography>
          <Map latitude={lati} longitude={long} zoom={zoom} />
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
