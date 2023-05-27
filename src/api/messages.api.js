import axios from 'axios'

export const getMessages = async () => {
  const response = await axios.get('http://localhost:8085/messages')
  return response.data
}

export const createMessage = async (message) => {
  const response = await axios.post(
    'http://localhost:8085/messages',

    {
      from: message.from,
      to: message.to,
      date: message.date,
      time: message.time,
      title: message.title,
      text: message.text
    }
  )
  return response.data
}

export const deleteMessage = async (id) => {
  const response = await axios.delete(`http://localhost:8085/messages/${id}`)
  return response.data
}

export const getMsgTo = async (to) => {
  const response = await axios.get(`http://localhost:8085/messages/${to}`)
  return response.data
}

export const getMsgFrom = async (from) => {
  const response = await axios.get(`http://localhost:8085/messages/${from}`)
  return response.data
}
