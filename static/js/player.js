const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const marker = document.getElementById("marker");
const volumeControl = document.getElementById("volumeControl");
const volumeBar = document.querySelector('.bar');
const barFill = document.querySelector('.bar-fill');

let selectedSong = null;
let isPlaying = false;


function selectSong(song) {
    selectedSong = `./static/audio-player/${song}`;
    audioPlayer.src = selectedSong;
    audioPlayer.load();
    playAudio();  
}


function playAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
    } else {
        audioPlayer.pause();
        isPlaying = false;
    }
}

// Control de volumen cuando el usuario arrastra la barra
volumeBar.addEventListener('mousedown', function(event) {
    document.addEventListener('mousemove', adjustVolume);
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', adjustVolume);
    });
});

function adjustVolume(event) {
    const barRect = volumeBar.getBoundingClientRect();
    const offsetY = event.clientY - barRect.top;
    const barHeight = volumeBar.offsetHeight;
    let newHeight = barHeight - offsetY;
    if (newHeight < 0) newHeight = 0;
    if (newHeight > barHeight) newHeight = barHeight;
    const volumePercentage = newHeight / barHeight;
    barFill.style.height = `${volumePercentage * 100}%`;

    audioPlayer.volume = volumePercentage;
}

audioPlayer.addEventListener("timeupdate", function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    marker.style.left = `${progress}%`;
});

function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";  // Mostrar submenú
    } else {
        submenu.style.display = "none";   // Ocultar submenú
    }
}


