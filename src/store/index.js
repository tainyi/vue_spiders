import Vue from 'vue'
import Vuex from 'vuex'

import user_Info from './modules/userInfo'

Vue.use(Vuex);

const store = new Vuex.Store({
    /* state:{
        name:"yyitian",
        age:23
    } */
    modules:{
        userInfo:user_Info
    }
});

export default store