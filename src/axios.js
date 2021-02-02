import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//If we use instance.get = '/hello' -> it goes to https://api.themoviedb.org/3/hello
