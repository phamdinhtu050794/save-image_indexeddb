<template>
    <div class="img-container">
        <div  class="img-content">
              <img v-bind:src='previewImage' class="uploading-image " alt="imagesssssss" width="400" height="400" />
        </div>
        <button @click="$emit('delete',previewImage)">Delete</button>
     <button  @click="$emit('edit',previewImage)">Edit</button>
    </div>
</template>
<script>
// import image from "./assets/image/*"
export default {
    name:'Images',
    props:['previewImage'],

     data: () => ({
  }),
  
    create(){
        console.log(' img create')
    }

    
}
</script>
<style lang="scss" scoped>
.img-container{
     display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
}
.img-content{
    width: 400px;
    height: 400px;
}
</style>