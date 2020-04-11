import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json",
  headers: {
    'Access-Control-Allow-Origin': true,
    'Content-Type': 'application/json'
  }
});