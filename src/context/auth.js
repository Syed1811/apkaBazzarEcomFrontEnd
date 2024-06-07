import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({
    user: null,
    tocken: "",
  });

  // default axios
  axios.defaults.headers.common["Authorization"] = auth?.tocken;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setauth({ ...auth, user: parseData.user, tocken: parseData.tocken });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <authContext.Provider value={[auth, setauth]}>
      {children}
    </authContext.Provider>
  );
};

//custom hook
const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
