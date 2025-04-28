import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your deployed backend URL if needed
  headers: {
    "Content-Type": "application/json",
  }
})

export default API
