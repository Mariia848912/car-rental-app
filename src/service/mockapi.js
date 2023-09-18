import axios from "axios";

axios.defaults.baseURL = "https://6481989929fa1c5c5031b342.mockapi.io/adverts";

export const fetchAdverts = async (limit, page) => {
  try {
    const { data } = await axios.get(`?limit=${limit}&page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
