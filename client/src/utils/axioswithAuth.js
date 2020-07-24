
import axios from "axios";

export  default function  axioswithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "http://localhost:5000"
  });
};
