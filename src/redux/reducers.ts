import { combineReducers } from "redux";
import signalReducer from "./signal/reducer";

const rootReducer = combineReducers({
  signal: signalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
