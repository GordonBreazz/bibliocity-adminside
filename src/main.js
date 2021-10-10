import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

//import firebase from "@firebase/app";
import { firebaseConfig } from "../firebase.config.js"
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'

console.log(firebaseConfig)
// Авторизация пользоателя
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false


let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    console.log('ok')
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)      
    }).$mount('#app')
  }
})

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
