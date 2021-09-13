import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import initializeApp from "firebase/app";
import { firebaseConfig } from "../firebase.config.js"
import "firebase/auth";
import "firebase/firestore";

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
