<template>
    <div class="home">
        <div v-for="(item, idx) in items" :key="idx">
            <Images
                :item="item"
                 @delete="deleteItem" 
                 @edit="editItem" 
            ></Images>
        </div>
        <button @click="addItem"> Add</button>
    </div>
</template>
<script>

import Images from './../components/Images.vue'
export default {
    name:'Home',
    components:{
        Images
    },
    computed:{
        items(){
            return this.$store.state.items;
        }
    }, 

    created(){
        this.$store.dispatch('getItems');
    },

    methods:{
        addItem(){
            this.$router.push({name:'EditImages'});
        },
        async deteleItem(item){
            console.log('delete', item.id);
            await this.$store.dispatch('deleteItem', item);
            this.$store.dispatch('getItems');
        },
        editItem(item){
            console.log('edit', item.id);
            this.$router.push({name: 'EditImages', params:{item:item}});
        }
    }
}
</script>
<style lang="scss" scoped>

</style>