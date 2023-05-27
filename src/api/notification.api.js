import axios from 'axios'

export const getNotifications = async () => {
  const response = await axios.get('http://localhost:8085/notifications')
  return response.data
}
