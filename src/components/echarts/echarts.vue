<template>
    <div id="echarts" :style="setSize"></div>
</template>

<script>
export default {
    name : 'Echarts',
    data(){
        return {
            timer:null,
            myCharts:null,
        }
    },
    props:{
        width:{
            type:String,
            default:'600px'
        },
        height:{
            type:String,
            default:'600px'
        },
        option:{
            type:Object,
            default(){
                return{
                    title:{
                        text:"echarts在vue的使用"
                    },
                    legend:{
                        data:['销量']
                    },
                    xAxis:{
                        type:'category',
                        axisTick:{
                            alignWithLabel:true
                        },
                        data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis:{},
                    series:[{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        }
    },
    watch:{
        option:{
            handler(newVal,oldVal){
                if(newVal){
                    this.myCharts.setOption(newVal);
                }
                /* if(this.myCharts){
                    
                }else{
                    this.myCharts.init
                } */
            },
            deep: true
        }
    },
    computed:{
        setSize(){
            return{
                height:this.height,
                width:this.width
            }
        }
    },
    methods:{
        drawLine(){
            this.myCharts.showLoading({
                text: '正在努力的读取数据中...', 
            });

            this.myCharts.setOption(this.option)
    
            this.myCharts.hideLoading();
        }
    },
    mounted(){
        this.myCharts = this.$echarts.init(document.querySelector('#echarts'))
        this.drawLine();
    }
}
</script>

<style lang="less">

</style>
