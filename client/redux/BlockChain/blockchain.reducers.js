import projectTypes from "./blockchain.types";

const INITIAL_STATE = {
  cryptos: [],
};

const blockchainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectTypes.FETCH_ALL_CRYPTOS:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
