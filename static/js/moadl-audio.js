
        var audioModal = document.getElementById("audioModal");
        var btnAbrirModal = document.getElementById("openAudioModal");
        var btnCerrarModal = document.getElementById("closeAudioModal");

        btnAbrirModal.onclick = function() {
            audioModal.style.display = "block";
        }

        btnCerrarModal.onclick = function() {
            audioModal.style.display = "none";
        }

        function reproducirAudio() {
            var audio = document.getElementById("audioElement");
            audio.play();
        }

        function seleccionarCancion(cancion) {
            var audio = document.getElementById("audioElement");
            audio.src = './audio-player/' + cancion;
            audio.play();
        }

        const closeAudioModal = document.getElementById("closeAudioModal");

        closeAudioModal.addEventListener("click", function() {
            audioPlayer.pause(); 
            audioPlayer.currentTime = 0; 
            document.getElementById("audioModal").style.display = "none"; 
        });
        
