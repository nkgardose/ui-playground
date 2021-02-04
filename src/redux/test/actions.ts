import { ThunkAction } from "../../utils/types";

export const invokeEmitSignal = (): ThunkAction => async (
  dispatch,
  getState,
  context
) => {
  await context.callZome({
    zomeName: "zomeone",
    fnName: "emit_signal_20",
  });
};
