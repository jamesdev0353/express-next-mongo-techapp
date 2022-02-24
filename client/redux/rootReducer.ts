import { combineReducers } from "redux";
import projectsReducer from "./Projects/projects.reducer";
import blockchainReducer from "./BlockChain/blockchain.reducers";
import userReducer from "./User/user.reducers";


const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  cryptos: blockchainReducer,
});



export default rootReducer;
