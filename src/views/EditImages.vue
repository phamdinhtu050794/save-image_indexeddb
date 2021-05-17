<template>
  <div>
    <img v-bind:src="previewImage" width="400" height="400" class="uploading-image" />
    <input type="file" accept="image/*" @change="uploadImage" />

    <button @click="saveimg">Save</button>
  </div>
</template>

<script>
export default {
  name: "EditImages",
  data() {
    return {
      previewImage:'',
      
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
    async saveimg() {
      await this.$store.dispatch("saveItem", this.previewImage);
      console.log("back");
      this.$router.push("/");
    },
  },
}; // missing closure added
</script>



<style>
.uploading-image {
  display: flex;
}
</style>