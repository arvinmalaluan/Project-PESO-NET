import axios from "axios";

const authenticate = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8001/general/login",
      formData
    );

    if (response.data["success"]) {
      alert(formData);
      console.log(formData);
    } else {
      alert("error happened");
    }
  } catch (error) {
    console.log(error);
  }
};

export default authenticate;
