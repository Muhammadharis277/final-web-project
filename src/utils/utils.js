import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    const data = await response.data;
    return data;
  } catch (err) {
    return { error: err.message };
  }
};

export const getProductById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/products/${id}`);
      const data = await response.data;
      return data;
    } catch (err) {
      return { error: err.message };
    }
  };
