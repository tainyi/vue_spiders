<template>
    <h1>{{userName}},页面不见了</h1>
</template>
<script>
import {mapState,mapGetters,mapActions } from 'vuex'; //先要引入
export default {
    computed:{
        ...mapGetters('userInfo',{
            userName:'getName'
        })
    }
}
</script>

