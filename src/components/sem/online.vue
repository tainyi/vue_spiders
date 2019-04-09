<template>
    <div>
        <Echarts :option='option'></Echarts>
    </div>
</template>

<script>
import Echarts from '../../components/echarts/echarts'
export default {
    name:"online",
    components:{Echarts},
    data(){
        return {
            option:{
                title:{
                    text:"实时数据"
                },
                legend:{
                    data:['ltv','新增']
                },
                xAxis:{
                    type:'category',
                    axisTick:{
                        alignWithLabel:true
                    },
                    data:["周一","周二","周三","周四","周五","周六","周日"]
                },
                series:[
                    {
                        name:''
                    }
                ]
            },
            seriesData:[
                [90, 75, 44, 20, 6, 2,0],
                [80, 4, 3, 2, 1, 0,0]
            ],

        }
    },
    methods:{

    },
    mounted(){
        this.myCharts = this.$echarts.init(document.querySelector('#echarts'))

    }
}
</script>
