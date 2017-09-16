<script>

document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture); 
e1.addEventListener("click", cameraGetPicture);
})
function cameraGetPicture() {
   navigator.camera.getPicture(onSuccess, onFail, { 
    quality:50,
    targetWidth:200,
    targetHeight:200,
    sourceType:0
   })

  

 

}
  </script>