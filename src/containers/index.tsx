import React from "react";
import App from "../app";
import ReduxContainer from "./ReduxContainer";

const AppContainer: React.FC = () => (
  <ReduxContainer>
    <App />
  </ReduxContainer>
);

export default AppContainer;
