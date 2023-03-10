import axios from "axios";

const api = axios.create({
  baseURL: "https://63f62cd79daf59d1ad8378dd.mockapi.io",
});

export default api;