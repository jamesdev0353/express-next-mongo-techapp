import * as api from "./api";
import projectTypes from "./blockchain.types";

export const getCryptos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCryptos();
    // console.log(data, "oops");
    dispatch({ type: projectTypes.FETCH_ALL_CRYPTOS, payload: data });
  } catch (error) {
    console.log(error, "get  error");
  }
};
