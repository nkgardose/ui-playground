import { AppWebsocket } from "@holochain/conductor-api";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { SET_SIGNAL } from "./signal/types";
let client: any;

const init = async () => {
  if (client) {
    return client;
  }
  try {
    client = await AppWebsocket.connect(
      "ws://localhost:8888",
      4000,
      (wsSignal) => {
        store.dispatch({ type: SET_SIGNAL, signal: wsSignal });
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAgentId = async () => {
  await init();
  try {
    const info = await client.appInfo({ installed_app_id: "test-app" });
    return info.cell_data[0][0][1];
  } catch (e) {
    console.warn(e);
  }
};

export const callZome = async (config: any) => {
  await init();

  const info = await client.appInfo({ installed_app_id: "test-app" });
  const {
    cap = null,
    cellId = info.cell_data[0][0],
    zomeName,
    fnName,
    provenance = info.cell_data[0][0][1],
    payload = null,
  } = config;
  try {
    return await client.callZome({
      cap: cap,
      cell_id: cellId,
      zome_name: zomeName,
      fn_name: fnName,
      payload,
      provenance,
    });
  } catch (e) {
    console.warn(e);
    return null;
  }
};

const context = {
  callZome,
  getAgentId,
};

const updatedThunk = thunk.withExtraArgument(context);
const store = createStore(rootReducer, applyMiddleware(updatedThunk));

export default store;
