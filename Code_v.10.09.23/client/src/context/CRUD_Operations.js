import axios from "axios";

const url = "http://127.0.0.1:8000";

export const getProfile = async (id) => {
  const response = await axios.get(url + `/seeker/create-profile/${id}`);
  return response.data;
};

export const createUpdateProfile = async (data, id) => {
  let response;

  try {
    response = await axios.put(url + `/seeker/create-profile/${id}`, data);
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

export const getJobs = async (data) => {
  const response = await axios.get(
    `${url}/jobrecru/jobpost?allprofile=${data}`
  );
  return response.data;
};

export const getAllJobs = async () => {
  const response = await axios.get(`${url}/jobrecru/`);
  return response.data;
};

export const createJob = async (data) => {
  const response = await axios.post(`${url}/jobrecru/jobpost`, data);
  return response.data;
};

export const updateJob = async (data) => {
  const response = await axios.put(`${url}/jobrecru/jobpost/${data.id}`, data);
  return response.data;
};

export const getProfilesWithRole = async () => {
  const response = await axios.get(`${url}/seeker/get-w-roles`);
  return response.data;
};

export const createDeleteApplication = async (data) => {
  let resposne;

  try {
    resposne = await axios.post(`${url}/jobrecru/apply`, data);
  } catch {
    resposne = await axios.delete(`${url}/jobrecru/apply/${data.key}`);
  }

  return resposne;
};

export const get2Roles = async () => {
  const response = await axios.get(`${url}/seeker/admin-getusers`);
  return response.data;
};

export const createComment = async (data) => {
  const response = await axios.post(`${url}/seeker/create-comment`, data);
  return response.data;
};

export const getDbStats = async () => {
  const response = await axios.get(`${url}/seeker/get`);
  return response.data;
};

export const getResume = async (id) => {
  const response = await axios.get(`${url}/seeker/create-resume/${id}`);
  return response.data;
};

export const updateJobPost = async (data, id) => {
  const response = await axios.put(`${url}/jobrecru/jobpost/${id}`, data);
  return response.data;
};

export const rejectApplicant = async (id, data) => {
  const response = await axios.put(`${url}/jobrecru/apply/${id}`, data);
  return response.data;
};

export const getApplication = async (id) => {
  let response;

  try {
    response = await axios.get(`${url}/jobrecru/apply/${id}`);
  } catch (error) {
    response = error;
  }

  return response;
};
