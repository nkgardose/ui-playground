import { Action } from "redux";
import { ThunkAction as Thunk } from "redux-thunk";
import { RootState } from "../redux/reducers";

export type ThunkAction = Thunk<void, RootState, any, Action<string>>;
