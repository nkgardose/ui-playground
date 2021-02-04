import { SET_SIGNAL, SignalActionType, SignalState } from "./types";

const initialState: SignalState = {};

const signalReducer = (state = initialState, action: SignalActionType) => {
  switch (action.type) {
    case SET_SIGNAL:
      console.log(action.signal);

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default signalReducer;
