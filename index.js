const video = document.getElementById("my-video");
const music = document.getElementById("music-player");
const audio = document.getElementById("audio")
let playAudioBtn = document.getElementById("btn-change-background")
let playVideoBtn = document.getElementById("my-video")

function playPauseTrack() {
    if(audio.paused) {
        audio.play();
        video.play();
        playAudioBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    } else {
        audio.pause();
        video.pause();
        playAudioBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
    }
}