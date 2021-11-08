import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src: '' },
      { userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src: '' },
      { userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src: '' }
    ]
  },
  getters: {
    allUsersCount: state => state.allUsers.length,
    countOfSeoul: state => {
      let count = 0
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })  
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100) 
    }

  },
  mutations: {
    addUsers: (state, payload) => {

    }
  },
  actions: {

  }
})
