import axios from "axios";
import { useState } from "react";

const seeker_url = "http://127.0.0.1:8000/seeker";

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

export const post_comment = async (data) => {
  try {
    const response = await axios.post(seeker_url + "/create-comment", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const create_post = async (data) => {
  let response;

  try {
    response = await axios.post(seeker_url + "/create-post", data);
  } catch (error) {
    response = error;
  }

  return response;
};

export const upd_crt_resume = async (data) => {
  let response;

  try {
    response = await axios.put(
      seeker_url + "/create-resume/" + data.account,
      data
    );
  } catch {
    response = await axios.post(seeker_url + "/create-resume", data);
  }

  return response;
};

export const get_resume = async (user_id) => {
  const response = await axios.get(seeker_url + "/create-resume/" + user_id);
  return response.data;
};

export const get_accounts = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/seeker/create-profile"
  );

  return response.data;
};
