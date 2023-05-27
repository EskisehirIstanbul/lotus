import axios from 'axios'

export const loginStudent = async (username, password) => {
  const response = await axios.post('http://localhost:8085/student/login', {
    username,
    password
  })
  return response.data
}
