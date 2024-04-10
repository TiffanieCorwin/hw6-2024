var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

const videoElement = document.getElementById('video'); //This line retrieves the video element with the ID "myVideo" from the HTML document.//


// Disable autoplay
videoElement.autoplay = false; //this line sets the autoplay property of the video element to false. The autoplay property determines whether the video should automatically start playing when the page loads. Setting it to false disables autoplay.//

// Disable looping
videoElement.loop = false; //This line sets the loop property of the video element to false. The loop property determines whether the video should automatically start playing again from the beginning when it reaches the end. Setting it to false disables looping.//

const videoElement = document.getElementById('video'); //retrieve the video element//

// Play the video
videoElement.play();

// Function to update volume information
function updateVolumeInfo() {
  const currentVolume = videoElement.volume;
  const volumePercentage = Math.round(currentVolume * 100); // Convert to percentage

  // Update UI element //
  console.log(`Current Volume: ${volumePercentage}%`);

  // const volumeDisplay = document.getElementById('volumeDisplay');
  // volumeDisplay.textContent = `Volume: ${volumePercentage}%`;
}

// Update volume information initially
updateVolumeInfo();

// Update volume information whenever it changes
videoElement.addEventListener('volumechange', updateVolumeInfo);

const videoElement = document.getElementById('video');

// Pause the video
videoElement.pause();

const videoElement = document.getElementById('video');
const slowDownButton = document.getElementById('slowDownButton'); // Assuming button has ID "slowDownButton"

let Speed = 1; // Initial speed is 1 (normal)

slower.addEventListener('click', () => {
  // Decrease speed by 10% (rounded down to 2 decimals)
  Speed -= 0.1;
  Speed = Math.max(0.1,Speed.toFixed(2)); // Ensure speed doesn't go below 0.1

  // Set the new playback rate
  videoElement.playbackRate = Speed;

  // Log the new speed to the console
  console.log(`New playback speed: ${Speed}`);
});

const videoElement = document.getElementById('video');
const slower = document.getElementById('slower');
const faster = document.getElementById('faster');

let initialSpeed = videoElement.playbackRate; // Store initial playback rate
let Speed = initialSpeed; // Track current playback rate

slower.addEventListener('click', slowDownVideo);
faster.addEventListener('click', speedUpVideo);

function slowDownVideo() {
  // Decrease speed by 10% (rounded down to 2 decimals)
  Speed -= 0.1;
  Speed = Math.max(0.1,Speed.toFixed(2)); // Ensure speed doesn't go below 0.1

  // Set the new playback rate
  videoElement.playbackRate = Speed;

  // Log the new speed to the console
  console.log(`New playback speed (slow down): ${currentSpeed}`);
}

function speedUpVideo() {
  // Increase speed proportionally to slow down (considering initial speed)
  const speedIncrease = (initialSpeed - Speed) * 1.1; // Increase by 10% more than decrease amount
  Speed = Math.min(initialSpeed, Speed + speedIncrease); // Ensure speed doesn't go above initial speed

  // Set the new playback rate
  videoElement.playbackRate = Speed;

  // Log the new speed to the console
  console.log(`New playback speed (speed up): ${Speed.toFixed(5)}`); // Log with higher precision for close-to-original check
}
const videoElement = document.getElementById('video');

function advanceVideo() {
  const newTime = videoElement.currentTime + 10; // New desired time (current time + 10 seconds)

  // Check if exceeding video length
  if (newTime > videoElement.duration) {
    videoElement.currentTime = 0; // Go back to the beginning
    console.log('Reached video end, restarted.');
  } else {
    videoElement.currentTime = newTime;
    console.log(`New video position: ${newTime.toFixed(2)} seconds`);
  }
}

const videoElement = document.getElementById('video');
const mute = document.getElementById('mute');

mute.addEventListener('click', toggleMute);

function toggleMute() {
  if (videoElement.muted) {
    videoElement.muted = false;
    mute.textContent = 'Mute';
  } else {
    videoElement.muted = true;
    mute.textContent = 'Unmute';
  }
}

// Call advanceVideo() or use it as an event listener for a button
advanceVideo(); // Call directly for testing

const videoElement = document.getElementById('video');
const slider = document.getElementById('slider');
const volume = document.getElementById('volumeDisplay');

// Update volume and display based on slider value
function updateVolume() {
  const newVolume = volumeSlider.value;
  videoElement.volume = newVolume;
  const volumePercentage = Math.round(newVolume * 100); // Convert to percentage
  volumeDisplay.textContent = `Volume: ${volumePercentage}%`;
}

// Update volume and display on initial load
updateVolume();

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

