import Vue from 'vue';
import Vuex from 'vuex';
import App from '../component/signup/signup.component.vue';
import VueFormWizard from 'vue-form-wizard';
import SignupStore from '../store/signup.store';
import s from "vue-form-wizard/dist/vue-form-wizard.min.css";

console.log(s);

Vue.use(Vuex);
Vue.use(VueFormWizard);

new Vue({
    el: "#app",
    components: { App },
    store: new Vuex.Store(SignupStore)
});
