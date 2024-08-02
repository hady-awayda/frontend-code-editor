import fetchBase from "../base/read";

const get = () =>
  fetchBase(async (axiosInstance, { userData }) => {
    return await axiosInstance.get(`/conversations/${userData?.user_id}`);
  });

export default get;
