import axios from "../../../config/axiosConfig";

const sendFile = async (file) => {
  const { token } = JSON.parse(localStorage.getItem("jwtData"));

  const formData = new FormData();
  formData.append("file", file);

  try {
    const { data } = await axios.post("/admin/import", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  } catch (error) {
    throw error;
  }
};

export default sendFile;
