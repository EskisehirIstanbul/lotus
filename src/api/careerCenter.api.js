import axios from 'axios'

export const loginCareerCenter = async (username, password) => {
  const response = await axios.post('http://localhost:8085/careerCenter/login', {
    username,
    password
  })
  return response.data
}

export const assignCareerCenter = async (username, password) => {
  const response = await axios.post('http://localhost:8085/careerCenter/assign', {
    username
  })
  return response.data
}
