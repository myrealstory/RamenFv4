import React, { useState } from "react";
import sqlLoginContext from "./sqlLoginContext";
import { useNavigate } from 'react-router-dom'

function AuthProvider({ children }) {
  const unAuthState = {
    authorized: false,
    sid: 0,
    account: "",
    token: "",
  };

  //先查看 localStorage 的資料是否表示已經登入
  const localAuthStr = localStorage.getItem("auth");
  let localAuth = { ...unAuthState };

  if (localAuthStr) {
    //如果有登入，就執行Json Parse 然後執行拷貝token
    try {
      localAuth = JSON.parse(localAuthStr);
      if (localAuth.account && localAuth.token) {
        localAuth = { ...localAuth, authorized: true };
      }
    } catch (ex) {}
  }

  const [auth, setAuth] = useState(localAuth);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({ ...unAuthState });
    navigate("/");
  };
  return (
    <sqlLoginContext.Provider value={{ ...auth, setAuth, logout }}>
      {children}
    </sqlLoginContext.Provider>
  );
}

export default AuthProvider;
