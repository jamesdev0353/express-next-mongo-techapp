import React, { useEffect, useState } from "react";
import styles from "./../styles/Blockchain.module.scss";

import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import CardMedia from "@mui/material/CardMedia";

import CryptoForm from "./CryptoForm";
import { IPropCrypt } from "./interface";
import useSetCryptos, { useCryptosData } from "./../../hooks/cryptoHooks";

const Cryptos = () => {
  const [cryptoDescr, setCryptoDescr] = useState("");
  const [bool, setBool] = useState(false);
  const { bitcoin, ethereum, load, dt, iError, err, rfetch } = useSetCryptos();
  const { cryptos } = useCryptosData();
  const [searchCrypto, setSearchCrypto] = useState<IPropCrypt>({
    name: "cardano",
    price: "0",
    symbol: "",
  });

  const pull_data = async (index: string, boolData: boolean) => {
    if (boolData === false) {
      setBool(true);
    } else {
      setSearchCrypto({
        name: cryptos[index].name,
        price: cryptos[index].quote.USD.price,
        symbol: cryptos[index].symbol,
      });
      setBool(false);
    }
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        title="cryptotitle"
        component="img"
        src="https://www.crypto-news-flash.com/wp-content/uploads/2021/11/cryptocurrency-6601591__340.jpg"
        className={styles.media}
      />
      <CryptoForm cryptos={cryptos} func={pull_data} />

      <div className={styles.overlay}>
        <Typography variant="body2">
          {searchCrypto.symbol}: {parseFloat(searchCrypto.price).toFixed(3)}
        </Typography>
      </div>
      {!bitcoin.symbol ? (
        <CircularProgress />
      ) : (
        <>
          <Typography className={styles.title} variant="body2" gutterBottom>
            {bitcoin.symbol}: {parseFloat(bitcoin.price).toFixed(3)} USDT
          </Typography>

          <Typography className={styles.title} variant="body2" gutterBottom>
            {ethereum.symbol}: {parseFloat(ethereum.price).toFixed(3)} USDT
          </Typography>
          <CardContent>
            <Typography variant="body2" gutterBottom>
              {cryptoDescr}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default Cryptos;
