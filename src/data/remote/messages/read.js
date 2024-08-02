import fetchBase from "../base/read";

const get = (params) =>
  fetchBase(async (axiosInstance, { params, userData }) => {
    return await axiosInstance.get(`/messages/${userData?.user_id}/${params}`);
  }, params);

export default get;
