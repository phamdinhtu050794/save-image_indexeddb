import Vue from 'vue'
import Vuex from 'vuex'
import iddb from './../iddb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
  },
  mutations: {
  },
  actions: {

    async deleteItem(context, item){
      console.log('store is being asked to delete '+ item.id);
      await iddb.deleteItem(item);
    },
    async getItems(context){
      context.state.items =[];
      let items = await iddb.getItems();
      items.forEach(c => {
        context.state.items.push(c);
      });
    },

    async saveItem(context, item){
      await iddb.saveItem(item)
    },
  },
  modules: {
  }
})
