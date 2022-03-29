import { useEffect, useState } from "react";
import { useCryptoData } from "../../apis/BlockChain/api";
import { IPropCrypt } from "./interface";

export default function useSetCryptos() {
  const [bool, setBool] = useState(false);
  const [cryptos, setCryptos] = useState<any[]>();
  const onSuccess = (data: any) => {
    setCryptos(data.data);
    setBool(true);
  };
  const onError = (error: Error) => {
    setBool(false);
  };
  const { isLoading, data, isError, error, refetch } = useCryptoData(
    onSuccess,
    onError
  );

  const [bitcoin, setBitcoin] = useState<IPropCrypt>({
    name: "bitcoin",
    price: "0",
    symbol: "",
  });
  const [ethereum, setEthereum] = useState<IPropCrypt>({
    name: "ethereume",
    price: "0",
    symbol: "",
  });
  useEffect(() => {
    if (cryptos) {
      setBitcoin({
        name: bitcoin.name,
        price: cryptos[0].quote.USD.price,
        symbol: cryptos[0].symbol,
      });
      setEthereum({
        name: ethereum.name,
        price: cryptos[1].quote.USD.price,
        symbol: cryptos[1].symbol,
      });
    }
  }, [bitcoin.name, cryptos, ethereum.name]);
  return {
    bitcoin,
    ethereum,
    load: isLoading,
    dt: data,
    iError: isError,
    err: error,
    rfetch: refetch,
  };
}

export function useCryptosData() {
  const [bool, setBool] = useState(false);
  const [cryptos, setCryptos] = useState<any[]>();
  const onSuccess = (data: any) => {
    setCryptos(data.data);
    setBool(true);
  };
  const onError = (error: Error) => {
    setBool(false);
  };
  const { isLoading, data, isError, error, refetch } = useCryptoData(
    onSuccess,
    onError
  );

  return { cryptos };
}
