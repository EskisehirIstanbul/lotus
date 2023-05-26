import axios from "axios";

export const getStudents = () => {
  return axios.get("/api/students");
}

export const getStudent = (username) => {
  return axios.get(`/api/students/${username}`);
}
