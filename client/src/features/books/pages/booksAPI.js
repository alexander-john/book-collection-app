import axios from "axios";

const BASE_URL = "http://localhost:8800";

export const createBook = (bookData) => {
    return axios.post(`${BASE_URL}/books`, bookData);
};
