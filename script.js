const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream, pass video to element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch errors
    console.log("you have an error", error);
  }
}

button.addEventListener("click", async () => {
  //Disable button
  button.disabled = true;
  //Start Picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});
// on Load
selectMediaStream();
