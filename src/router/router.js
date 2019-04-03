import Vue from "vue";
import VueRouter from 'vue-router';

import errorC from '../components/error/error';
import wecome from '../components/wecome/wecome';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/404',component:errorC},
        {path:'/wecome',component:wecome}
    ]
 
})

export default router;