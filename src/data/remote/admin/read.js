import fetchBase from "../base/read";

const get = () =>
  fetchBase(async (axiosInstance) => {
    return await axiosInstance.get(`/admin`);
  });

export default get;
