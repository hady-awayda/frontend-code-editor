import fetchBase from "../base/read";

const get = (params) =>
  fetchBase(async (axiosInstance, { userData }) => {
    return await axiosInstance.get(`/source_codes/${userData?.user_id}`);
  });

export default get;
