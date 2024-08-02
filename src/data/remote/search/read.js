import fetchBase from "../base/read";

const get = (params) =>
  fetchBase(async (axiosInstance, { userData }) => {
    return await axiosInstance.get(`/search/${params}`);
  });

export default get;
