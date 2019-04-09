import Vue from "vue";
import VueRouter from 'vue-router';

import errorC from '../components/error/error';
import wecome from '../components/wecome/wecome';
import echarts from '../components/echarts/echarts';

import semOnline from '../components/sem/online';
import semOffline from '../components/sem/offline';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/',component:wecome},
        {name:'echarts',path:'/echarts',component:echarts},
        {name:'wecome',path:'/wecome',component:wecome,
            children:[
                {path:'/name'}
            ]
        },

        {path:'/online',component:semOnline},
        {path:'/offline',component:semOffline},
       

        {name:'error',path:'*',component:errorC},
    ]
 
})

export default router;