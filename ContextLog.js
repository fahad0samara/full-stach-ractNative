import react, {useContext, useState, createContext} from "react";

  const ContextLog = createContext();
const LogCheck = ({children}) => {


  const [log, setLog] = useState(false);
  const [profile, setProfile]=useState({})


  return (
    <ContextLog.Provider
      value={{
        log,
        setLog,
        profile,
        setProfile
      }}
    >
      {children}
    </ContextLog.Provider>
  );
};

export const useLogIN = () => useContext(ContextLog);

export default LogCheck;
