import Vue from "vue";
import VueRouter from 'vue-router';

import errorC from '../components/error/error';
import wecome from '../components/wecome/wecome';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {name:'error',path:'/404',component:errorC},
        {name:'wecome',path:'/wecome',component:wecome}
    ]
 
})

export default router;