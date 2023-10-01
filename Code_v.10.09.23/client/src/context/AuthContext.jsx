import axios from "axios";
import jwt_decode from "jwt-decode";

import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : null
  );

  const login_user = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/general/login",
        formData
      );

      if (response.status === 200) {
        const data = response.data.token;
        setToken(data);
        setUser(jwt_decode(data));

        localStorage.setItem("token", data);

        console.log(data);

        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout_user = () => {
    localStorage.clear();
    location.reload();
  };

  const contextData = {
    // Data
    user: user,

    // Functions
    login_user: login_user,
    logout_user: logout_user,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
