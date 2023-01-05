import Vue from 'vue'
import App from './App.vue'
import VueUploadMultipleImage from './components/VueUploadMultipleImage'

var sel = document.querySelector('#vue-upload-multiple-image');
if (sel && fce_defined()) {
  Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)
  window.vue_instance = new Vue({
    el: '#vue-upload-multiple-image',
    render: function (h) {
      return h(App, { 
        props: { 
          imageList: this.imageList,
          dataChange:this.change,
          uploadImageSuccess:this.uploadImageSuccess 
        } 
      });
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

window.update_album = function(){
  console.log("updating album", new Date().getTime());
  vue_instance.imageList = imageList;
}

function fce_defined(){
  if(typeof dataChange !== "function"){
    console.log("You can specify function dataChange()");
    window.dataChange = function(){};
  }
  if(typeof uploadImageSuccess !== "function"){
    console.warn("Specify function uploadImageSuccess(formData, index, fileList) uploading image!")
    return false;
  }
  return true;
}

export default VueUploadMultipleImage
