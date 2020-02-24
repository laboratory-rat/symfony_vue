import Vue from 'vue';
import Vuex from 'vuex';
import App from '../component/signup/signup.component.vue';
import signupStore from '../store/signup.store';

Vue.use(Vuex);
const store = new Vuex.Store(signupStore);

new Vue({
    el: "#app",
    components: { App },
    store
});
