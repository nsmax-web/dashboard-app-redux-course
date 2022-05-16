import { combineReducers } from "redux";
import { filterReducer } from "./filters";
import { positionReducer } from "./positions";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
