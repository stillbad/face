document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById('video'), 
captureCanvas = document.getElementById('captureCanvas'), 
uploadCanvas = document.getElementById('uploadCanvas'), 
captureContext = captureCanvas.getContext('2d'),
uploadContext = uploadCanvas.getContext('2d'),
uploadedPhoto = document.getElementById('uploadedPhoto'),
capturedPhoto = document.getElementById('capturedPhoto'),
imageUploadInput = document.querySelector('[name="image-upload"]'),
apiKey = 'x6pft1odr2f-csu15q2y7bn',
errorAlert = document.getElementById('errorAlert'), AlertwarningAlert = document.getElementById('warningAlert'),
matchText = document.getElementById('match'),
scoreText = document.getElementById('score');
  // Stream Camera To Video Element
if(navigator.mediaDevices.getUserMedia){
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
  }).catch(function(error) {
    console.log(error)
  })
}
});
