import axios from 'axios'

export const putOpportunity = async (opportunity) => {
  const response = await axios.put(`http://localhost:8085/opportunities/${opportunity.id}`, {
    location: opportunity.location,
    url: opportunity.url,
    deadline: opportunity.deadline,
    companyName: opportunity.companyName,
    title: opportunity.title
  })
  return response.data
}

export const getOpportunities = async () => {
  const response = await axios.get('http://localhost:8085/opportunities')
  return response.data
}

export const deleteOpportunity = async (id) => {
  const response = await axios.delete(`http://localhost:8085/opportunities/${id}`)
  return response.data
}

export const updateOpportunity = async (opportunity) => {
  const response = await axios.put(`http://localhost:8085/opportunities/${opportunity.id}`, {
    location: opportunity.location,
    url: opportunity.url,
    deadline: opportunity.deadline,
    companyName: opportunity.companyName,
    title: opportunity.title
  })
  return response.data
}
