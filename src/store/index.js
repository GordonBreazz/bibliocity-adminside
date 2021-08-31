import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socnet: [
      { 
        name: "facebook",
        icon: "mdi-facebook",
        link: "https://www.facebook.com/CBSUU",
        hint: "Наш Facebook"
      },
      {
        name: "vk",
        icon: "mdi-vk",
        link: "https://vk.com/ik_kalashnikov",
        hint: "Наша группа ВКонтакте"
      },
      {
        name: "youtube",
        icon: "mdi-youtube",
        link: "https://www.youtube.com/channel/UC3xc55v1C4hJmRp6UCLWeyQ",
        hint: "Наш канал на YouTube"
      },
      {
        name: "instagram",
        icon: "mdi-instagram",
        link: "https://www.instagram.com/cbs_kalashnikov/",
        hint: "Наш Instagram"
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
