import Vue from 'vue'
//引入 vuex 并 use
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    changeMenu: '',
    tagMenuList: []
};
const getters = {

}
const mutations = {
    /*当前选中的菜单*/
    changeMenu(state,value) {
        state.changeMenu = value===undefined ? '': value.name
        sessionStorage.setItem("selectedMenu", value===undefined ? '{}' : JSON.stringify(value));
    },
    /*当前显示的标签页*/
    changeTagMenu(state,value) {
        state.tagMenuList = value
        sessionStorage.setItem("tagMenuList", JSON.stringify(value));
    },
};


const actions = {

};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
