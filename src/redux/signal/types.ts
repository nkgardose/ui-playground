import { AppSignal } from "@holochain/conductor-api";

export const SET_SIGNAL = "SET_SIGNAL";

export interface SignalState {
  [key: string]: any;
}

interface SetSignalAction {
  type: typeof SET_SIGNAL;
  signal: AppSignal;
}

export type SignalActionType = SetSignalAction;
