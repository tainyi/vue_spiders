const state = {
    name:"yyitian",
    age:23
}

const getters = {
    getName(state){
        return state.name;
    }
}

const mutations = {
    setName(state,name){
        state.name = name;
    }
}

const actions = {
    invokeSetName(context,name){
        context.commit('setName',name);
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}