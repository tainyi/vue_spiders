<template>
    <div id="echarts" :style="{width:'600px',height:'600px'}"></div>
</template>

<script>
import { setTimeout, setInterval } from 'timers';

export default {
    name : 'echarts',
    data(){
        return {
            myCharts:null,
            allOption:null,
            xAxisData: ["周一","周二","周三","周四","周五","周六","周日"],
            seriesData:[
                [90, 75, 44, 20, 6, 2,0],
                [80, 4, 3, 2, 1, 0,0]
            ]
        }
    },
    methods:{
        drawLine(){
            this.myCharts.showLoading({
                text: '正在努力的读取数据中...', 
            });

            setTimeout(()=>{
                this.myCharts.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip:{ // 气泡提示配置
                        trigger:'item'                       // 触发类型，默认数据触发，可选为：'axis'
                    },
                    legend:{
                        data:['ltv','新增']
                    },
                    // calculable : true,
                    xAxis: {
                        type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
                        axisTick:{
                            alignWithLabel:true
                        },
                        data:this.xAxisData
                    },
                    yAxis: {
                        //  type: 'value',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
                    },
                    series: [{
                        name:'ltv',
                        type: 'line',// 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar                  
                        data: this.seriesData[0]
                    },{
                        name:'新增',
                        type: 'line',
                        data:  this.seriesData[1]
                    }]
                })
                this.myCharts.hideLoading();
            },500)

        },

        intervalGetData(){
            setTimeout(()=>{
                let x_Axis = this.xAxisData[0]
                this.seriesData[0].shift();
                this.seriesData[1].shift();

                this.seriesData[0].push(Math.round(Math.random() * 100));
                this.seriesData[1].push(Math.round(Math.random() * 100));

                this.xAxisData.shift();
                this.xAxisData.push(x_Axis);
                
                this.myCharts.setOption({
                    xAxis:{
                        data:this.xAxisData
                    },
                    series:[
                            {data: this.seriesData[0]},
                            {data: this.seriesData[1]}
                        ]
                })
                this.intervalGetData()
            },2100)
        },

        clearCharts(){
            let myCharts = this.$echarts.init(document.querySelector('#echarts'));
        }
    },
    created(){
       
    },
    mounted(){
        this.myCharts = this.$echarts.init(document.querySelector('#echarts'))
        
        this.drawLine();

        this.intervalGetData();
    }
}
</script>

<style lang="less">

</style>
