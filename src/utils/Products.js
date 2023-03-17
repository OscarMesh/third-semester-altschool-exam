import axios from "axios";
export const $_getPosts = () => {
  const endpoint = "https://dummyjson.com/products?limit=8";

  return axios.get(endpoint).then((response) => {
    return response.data;
  });
};
