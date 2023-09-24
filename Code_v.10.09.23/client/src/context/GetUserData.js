import axios from "axios";
import { useState } from "react";

const seeker_url = "http://127.0.0.1:8001/seeker";

export const get_profile = async (user_id) => {
  const response = await axios.get(seeker_url + "/create-profile/" + user_id);
  return response.data;
};

export const get_post = async () => {
  const response = await axios.get(seeker_url + "/create-post");
  return response.data;
};

export const get_post_details = async (post_id) => {
  const response = await axios.get(seeker_url + "/create-post/" + post_id);
  return response.data;
};

export const update_engagement = async (data) => {
  let response;

  try {
    response = await axios.put(
      seeker_url + "/create-engagement/" + data.custom_key,
      data
    );
  } catch {
    response = await axios.post(seeker_url + "/create-engagement", data);
  }

  return response;
};
