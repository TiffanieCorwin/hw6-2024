var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
  video=document.querySelector("#player1")
  video.autoplay=false;
  video.loop=false
  console.log ('auto play is set to' + video.autoplay)
  console.log('loop is set to' + video.loop)

});

document.querySelector("#play").addEventListener("click",function(){
  document.querySelector("#player1").play();
  console.log('volume is set to' + video.volume)
  document.querySelector("#volume").innerHTML=((video.volume)*100)+"%";
})


document.querySelector("#pause").addEventListener("click",function() {
document.querySelector("#player1").pause();
});

document.querySelector("#slower").addEventListener("click",function() {
  rate = video.playbackRate
  document.querySelector("#player1").playbackRate = (rate - .1);
  console.log ('playback speed is set to' + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click",function() {
  rate = video.playbackRate
  document.querySelector("#player1").playbackRate = (rate + .1);
  console.log ('playback speed is set to' + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click",function() {
  videoElement.currentTime
  document.querySelector("#player1").playbackRate = (rate + 10);
  console.log ('p' + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click",function() {
  document.querySelector("#player1").mute;
  console.log ('volume is muted');
});




// Update volume and display whenever the slider is moved
volumeSlider.addEventListener('input', updateVolume);

const videoElement = document.getElementById('video');
const vintageButton = document.getElementById('vintage');
const originalButton = document.getElementById('orig');

let isOldSchool = false; // Flag to track "old school" mode

vintageButton.addEventListener('click', toggleOldSchool);

function toggleOldSchool() {
  isOldSchool = !isOldSchool; // Toggle the flag

  if (isOldSchool) {
    // Apply "old school" effects (customize these effects as needed)
    videoElement.style.filter = "grayscale(100%)"; // Make video grayscale
    videoElement.volume = 0.8; // Set lower volume
  } else {
    // Remove "old school" effects
    videoElement.style.filter = "none"; // Remove grayscale
    videoElement.volume = 1; // Set normal volume
  }
}

function removeOldSchool() {// Remove "old school" class and any residual styles
	videoElement.classList.remove('oldSchool');
	videoElement.style.filter = ""; // Ensure filter is removed explicitly
	videoElement.style.volume = "";} // Reset volume style (optional)}
// Alternatively, add an event listener to a button (replace with your button element):
// buttonElement.addEventListener('click', advanceVideo);


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

