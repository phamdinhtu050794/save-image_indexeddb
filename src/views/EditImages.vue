<template>
  <div class="editimg-container">
  
	 <input type="file" accept="image/*" @change="onChange" />
  <div id="preview">
    <img v-if="item.imageUrl" :src="item.imageUrl" />
  </div>

  <button  @click="saveimg">Save</button>
  </div>
</template>
<script>
export default {
  name: "EditImages",
  data() {
    return {
      item:{
          //...
          image : null,
          imageUrl: null
      }
    }
  },
  created(){
      if(this.$route.params.item){
          this.item = this.$route.params.item;
      }else{
          this.item ={imageUrl:URL}
      }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
    }, 
   async saveimg(){
        await this.$store.dispatch('saveItem', this.item);
        console.log('back');
        this.$router.push('/');
    }

  }
};
</script>
<style lang="scss" scoped>
input{
    width: 50vw;
    height: 50px;
}

button{
    background-color: red;
}
</style>