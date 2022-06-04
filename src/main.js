import Vue from 'vue'
import App from './App.vue'
import VueUploadMultipleImage from './components/VueUploadMultipleImage'

var sel = document.querySelector('#vue-upload-multiple-image');
if (sel) {
  Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)
  new Vue({
    el: '#vue-upload-multiple-image',
    render: function (h) {
      return h(App, { props: { imageList: this.imageList,dataChange:this.change,uploadImageSuccess:this.uploadImageSuccess } });
    },
    data(){
      return {
        imageList: imageList
      }
    },
    methods:{
      change:dataChange,
      uploadImageSuccess:uploadImageSuccess
    }

  });
}

export default VueUploadMultipleImage
