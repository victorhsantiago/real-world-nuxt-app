import { getEvents, getEvent } from '@/services/EventService.js'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}

export const actions = {
  fetchEvents({ commit }) {
    return getEvents().then(({ data }) => commit('SET_EVENTS', data))
  },
  fetchEvent({ commit }, id) {
    return getEvent(id).then(({ data }) => commit('SET_EVENT', data))
  },
}
