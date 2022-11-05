import react,{ useContext } from "react";

import {useState} from "react";
import { createContext } from "react";
  const ContextLog = createContext();
const LogCheck = ({children}) => {


  const {isLogin, setisLogin} = useState(false);
  const {isLogout, setisLogout} = useState(false);

  return (
    <ContextLog.Provider
      value={{
        isLogin,
        setisLogin,
        isLogout,
        setisLogout,
      }}
    >
      {children}
    </ContextLog.Provider>
  );
};

export const useLogIN = () => useContext(ContextLog);

export default LogCheck;
