import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ef33e9dd5476768169d67be6fc5fc85e39adad97d25120a0ad20d5ab1ef7a262"
  }
});
