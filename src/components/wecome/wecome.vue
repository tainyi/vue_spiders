<template>
    <div class="wecome">
        <h1 @click="changeText" ref="h1">{{msg}}</h1>
        <!-- <div v-for=""></div> -->
        <img src='../../assets/logo.png' alt="">
    </div>
</template>

<script>
export default {
    name:'wecome',
    data(){
        return{
            msg:"点我切换文字",
            axiosData:null
        }
    },
    methods:{
        changeText(){
            // this.$refs.h1.innerHTML="textChange"
            this.msg='textChange'
        },
        
    },
    watch:{
        //监听
        msg:function(val,oldVal){
            console.log("newVal:"+val+',oldVal:'+oldVal)
        }
    },
    created(){
        //创建  
    },
    mounted(){
        //挂载
      /*  this.$axios
            .get('http://yybsuperappcms.cs0309.3gqq.com/node/GetReduceinfo')
            .then(response => (this.axiosData = response ))
            .catch(error => (console.log(error))) */
    },
    updated(){
     //更新  
    },
    destoryed(){
    // 销毁 
    },
}
</script>
