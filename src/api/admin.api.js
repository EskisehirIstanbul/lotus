import axios from 'axios'

export const loginAdmin = async (username, password) => {
  const response = await axios.post('http://localhost:8085/admin/login', {
    username,
    password
  })
  return response.data
}
