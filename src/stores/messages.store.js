import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMessageByEmail } from '../api/messages.api'

export default defineStore('messages', () => {
  const messages = ref(null)

  const setMessages = async (email) => {
    messages.value = await getMessageByEmail(email)
    console.log(messages.value)
    return messages.value
  }

  return {
    setMessages
  }
})
