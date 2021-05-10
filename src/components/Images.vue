<template>
    <div class="img-container">
        <div>
            {{item.imageUrl}}
        </div>
        <button @click="$emit('delete',item)">Delete</button>
     <button  @click="$emit('edit',item)">Edit</button>
    </div>
</template>
<script>
export default {
    name:'Images',
    props:['item'],
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
</style>