import { combineReducers } from "redux";
import firmsReducer from "../components/firms/reducer";

const rootReducer = combineReducers({
  firms: firmsReducer,
});

export default rootReducer;
