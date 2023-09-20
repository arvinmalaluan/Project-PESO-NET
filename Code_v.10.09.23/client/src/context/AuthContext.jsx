import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(null);
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens") ? "item" : null
  );
  const [accDetails, setAccDetails] = useState(null);

  console.log(accDetails);

  const login_user = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/general/login",
        formData
      );

      if (response.status === 200) {
        setTokens(response.data.tokens);
        setUser(response.data.tokens.access);
        setAccDetails(response.data.data);

        localStorage.setItem(
          "authTokens",
          JSON.stringify(response.data.tokens)
        );

        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const contextData = {
    // Data
    user: user,
    acc_details: accDetails,

    // Functions
    login_user: login_user,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
