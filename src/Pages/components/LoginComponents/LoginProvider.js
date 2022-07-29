import React, { createContext } from 'react'


const LoginProvider = createContext({
  activeLogin : false,
});

export default LoginProvider