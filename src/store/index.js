import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    count: 0,
    colorCode: 'blue'
  },
  getters: {
    countSquard(state) {
      return state.count * state.count
    }
  },
  mutations: {
    //commit
    decreaseCount(state, randomNumber) {
      state.count -= randomNumber
    },
    increaseCount(state, randomNumber) {
      state.count += randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    //dispatch
    decreaseCount({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('decreaseCount', response.data)
        })
    },
    increaseCount({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('increaseCount', response.data)
        })
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }
  },
  modules: {
  }
})
