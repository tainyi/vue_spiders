import Vue from "vue";
import VueRouter from 'vue-router';

import errorC from '../components/error/error';
import wecome from '../components/wecome/wecome';
import echarts from '../components/echarts/echarts';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {name:'error',path:'*',component:errorC},
        {name:'echarts',path:'/echarts',component:echarts},
        {name:'wecome',path:'/wecome',component:wecome,
            children:[
                {path:'/name'}
            ]
        }
    ]
 
})

export default router;