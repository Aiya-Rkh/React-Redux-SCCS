import { combineReducers } from "redux";
import filtersReducer from "./filters";
import sushiReducer from "./sushi";

const rootReducer = combineReducers({
  filters: filtersReducer,
  sushi: sushiReducer,
});

export default rootReducer;
