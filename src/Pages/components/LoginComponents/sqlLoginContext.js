import React, { createContext } from "react";

const sqlLoginContext = React.createContext({
  authorized: false,
  sid: 0,
  account: "",
  token: "",
});

export default sqlLoginContext;
