import axios from 'axios'

export const loginAdmin = async (username, password) => {
  const response = await axios.post('http://localhost:8085/admin/login', {
    username,
    password
  })
  return response.data
}
export const getAdminById = async (id) => {
  const response = await axios.get(`http://localhost:8085/admin/${id}`)
  return response.data
}
