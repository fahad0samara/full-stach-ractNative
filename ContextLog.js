import React, {useContext, useState, createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import APPloader from "./screens/APPloader";

  const ContextLog = createContext();
const LogCheck = ({children}) => {


  const [log, setLog] = useState(false);
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true);

  const checkLog = async () => {

    setLoading(true);
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
     
      try {
        const response = await axios.get(
          "https://firstauth.azurewebsites.net/auth/profile",
          {
            headers: {
              Authorization: `JWT ${token}`,
            },
          }
        );
        if (
          response.data.success
        ) {  setLoading(false);
               setLog(true);
               setProfile(response.data.mango);
               
        } else {
             setProfile({});
             setLoading(false);
         
        }
      } catch (error) {
        console.log(error);
        console.log(error.response);
        setLog(false);
        setLoading(false);
      }
    } else {
      setLoading(false);

   
    }
  };


  
  React.useEffect(() => {
    checkLog();
  }, []);




  return (
    <ContextLog.Provider
      value={{
        log,
        setLog,
        profile,
        setProfile,
        loading,
        setLoading,

      }}
    >

      {loading ? <APPloader /> : children}

    
    </ContextLog.Provider>

  );
};

export const useLogIN = () => useContext(ContextLog);

export default LogCheck;
