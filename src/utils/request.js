import axios from "axios"

// create an axios instance
const request = axios.create({
  baseURL: "https://www.reddit.com/",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export default request
