import axios from "axios";

const baseURL = "URL a gestionar";

export const sendMessage = async (values) => {
  const response = await axios({
    method: "POST",
    url: baseURL,
    data: values,
  })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
