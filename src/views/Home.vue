<template>
    <div class="home">
        <div v-for="(previewImage, id) in items" :key="id">
            <Images
                :previewImage="previewImage"
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
    data(){
        return{
            previewImage:''
        }
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
        async deleteItem(previewImage){
            console.log('delete', previewImage.id);
            await this.$store.dispatch('deleteItem', previewImage);
            this.$store.dispatch('getItems');
        },
        editItem(previewImage){
            console.log('edit', previewImage.id);
            this.$router.push({name: 'EditImages', params:{previewImage:previewImage}});
        }
    }
}
</script>
<style lang="scss" scoped>

</style>