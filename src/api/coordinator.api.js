import axios from 'axios'

export const loginCoordinator = async (username, password) => {
  const response = await axios.post('http://localhost:8085/coordinator/login', {
    username,
    password
  })
  return response.data
}

export const assignCoordinator = async (username, password) => {
  const response = await axios.post('http://localhost:8085/coordinator/assign', {
    username
  })
  return response.data
}
