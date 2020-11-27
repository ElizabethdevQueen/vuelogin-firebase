import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// web app (vlogin-app) firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7c8IT7fFiclpUCOqy-r1LJhSuyiIoRQ",
  authDomain: "loginauth-vue.firebaseapp.com",
  databaseURL: "https://loginauth-vue.firebaseio.com",
  projectId: "loginauth-vue",
  storageBucket: "loginauth-vue.appspot.com",
  messagingSenderId: "217359427319",
  appId: "1:217359427319:web:12e8ef3f1c759c92df15f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
