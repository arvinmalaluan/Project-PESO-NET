import axios from "axios";

export const get_profile = async (id) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/seeker/create-profile/${id}`
  );

  return response.data;
};
