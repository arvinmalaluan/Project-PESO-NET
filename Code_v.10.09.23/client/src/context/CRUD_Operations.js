import axios from "axios";

const url = "http://127.0.0.1:8000";

export const getProfile = async (id) => {
  const response = await axios.get(url + `/seeker/create-profile/${id}`);
  return response.data;
};

export const createUpdateProfile = async (data) => {
  let response;

  try {
    response = await axios.put(
      url + `/seeker/create-profile/${data.account}`,
      data
    );
  } catch {
    response = await axios.post(url + `/seeker/create-profile`, data);
  }

  return response.data;
};

export const getAllAccounts = async (id) => {
  const response = await axios.get(`${url}/general/info/${id}`);
  return response.data;
};

export const updateAccount = async (data) => {
  const response = await axios.put(url + `/general/update-password`, data);
  return response.data;
};

export const createUpdateEngagement = async (data) => {
  let response;

  try {
    response = await axios.put(
      `${url}/seeker/create-engagement/${data.custom_key}`,
      data
    );
  } catch {
    response = await axios.post(`${url}/seeker/create-engagement`, data);
  }

  return response.data;
};

export const createNewConvo = async (data) => {
  const response = await axios.post(`${url}/seeker/`, data);
  return response.data;
};

export const getProfiles = async () => {
  const response = await axios.get(`${url}/seeker/create-profile`);
  return response.data;
};
