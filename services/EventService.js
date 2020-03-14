import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const getEvents = () => apiClient.get('/events')

export const getEvent = (id) => apiClient.get(`/events/${id}`)

export default {
  getEvents,
  getEvent,
}
