import axios from "axios";
import jwt_decode from "jwt-decode";

const { user_id } = jwt_decode(localStorage.getItem("authTokens"));

const getUserAccount = async (id) => {
  const data = { id: id };
  try {
    const endpoint = "http://127.0.0.1:8001/general/info";
    const response = await axios.post(endpoint, data);

    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

const GetUserData = () => {
  const data = {
    getUserAccount: getUserAccount(user_id),
  };

  return data;
};

export default GetUserData;
