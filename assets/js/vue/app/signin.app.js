import Vue from 'vue';
import Vuex from 'vuex';
import App from '../component/signin/signin.component.vue';
import signinStore from '../store/signin.store';

Vue.use(Vuex);
const store = new Vuex.Store(signinStore);

new Vue({
    el: "#app",
    components: { App },
    store
});
