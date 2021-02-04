import React from "react";
import { useDispatch } from "react-redux";
import { invokeEmitSignal } from "../redux/test/actions";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(invokeEmitSignal());
  };
  return (
    <div>
      <button onClick={handleOnClick}>asdasdasds</button>
    </div>
  );
};

export default App;
