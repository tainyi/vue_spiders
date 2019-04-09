<template>
    <div class="wecome">
        <img :src='imgUrl' alt="">
        <h1 @click="changeText" ref="h1">欢迎：{{userName}}</h1>
        <button @click="invokeSetName(changeUserName())">修改名字</button>
        <p><input type="text" @keyup.enter="onEnter" v-model="secondCount"></p>
        <p><label for="isTrue"><input type="checkbox" v-model="isTrue" name="isTrue" id="isTrue">{{isTrue}}</label></p>
        <div>
            <label for="name1"><input type="checkbox" value="张三" id="name1" v-model="name">张三</label>
            <label for="name2"><input type="checkbox" value="李四" id="name2" v-model="name">李四</label>
            <label for="name3"><input type="checkbox" value="王五" id="name3" v-model="name">王五</label>
            <p>name:{{name}}</p>
        </div>
        <div>
            <label for="sex">
                <input type="radio" value="0" name="sex" id='sex' v-model="sex">男 
                <input type="radio" name="sex" value="1" id='sex' v-model="sex">女
            </label>
            <p>sex:{{sex}}</p>    
        </div>
        
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions } from 'vuex'; //先要引入
export default {
    name:'wecome',
    data(){
        return{
            msg:"点我切换文字",
            axiosData:null,
            imgUrl:require('../../assets/logo.png'),
            secondCount:1,
            isTrue:true,
            name:[],
            sex:'',
            // userName: this.$store.state.userInfo.name
        }
    },
    computed:{
        //vuex 获取数据 以下二选一即可
        /* ...mapState({
            userName:state => state.userInfo.name
        }), */
        ...mapGetters('userInfo',{
            userName:'getName'
        })
    },
    methods: {
        //vuex 操作数据
        ...mapActions('userInfo',[
            'invokeSetName'
        ]),
        changeText(){
            // this.$refs.h1.innerHTML="textChange"
            this.msg='textChange'
        },
        onEnter(){
            this.secondCount++;
        },
        changeUserName(){
            let newName = '';
            if(this.userName.length<8){
                newName = 'v_'+this.userName
            }else{
                newName = this.userName.substring(2,this.userName.length);

            }
            return newName
        }
    },
    watch:{
        //监听
        msg:function(val,oldVal){
            console.log("newVal:"+val+',oldVal:'+oldVal)
        }
    },
    // 生命周期
    beforeCreate(){
        //初始化  loading时间
    },
    created(){
        //创建   结束loading 初始化
    },
    beforeMount(){
        //挂载前
    },
    mounted(){
        //挂载
      /*  this.$axios
            .get('http://yybsuperappcms.cs0309.3gqq.com/node/GetReduceinfo')
            .then(response => (this.axiosData = response ))
            .catch(error => (console.log(error))) */
    },
    beforeUpdate(){
        //更新前
    },
    updated(){
     //更新  
    },
    activated(){
       // 
    },
    deactivated(){
        //
    },
    beforeDestroy(){
        //
    },
    destoryed(){
        // 销毁 
    },
    //路由钩子
    beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入路由模板");
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log("准备离开路由模板");
        next();
    }
}
</script>
