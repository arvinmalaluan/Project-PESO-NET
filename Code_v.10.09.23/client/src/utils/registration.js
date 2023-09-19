import axios from "axios";

const register = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8001/general/register",
      formData
    );

    if (response.data["success"]) {
      alert("success");
    } else {
      alert("failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export default register;
