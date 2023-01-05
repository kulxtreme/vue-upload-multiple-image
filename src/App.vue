<template>
  <div id="vue-upload-multiple-image">
    <vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      @data-change="dataChange"
      @limit-exceeded="limitExceeded"
      :imageList="imageList"
      ></vue-upload-multiple-image>
  </div>
</template>


<script>
import VueUploadMultipleImage from './components/VueUploadMultipleImage'
export default {
  name: 'app',
  props:["uploadImageSuccess","dataChange","imageList"],
  components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess2(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://gostore.gostore-api.test/api/items/upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    dataChange2 (data) {
      console.log(data)
    },
    limitExceeded(amount){
      console.log(amount)
    }
  }
}
</script>
<style>
.image-bottom{display: none !important;}
</style>
