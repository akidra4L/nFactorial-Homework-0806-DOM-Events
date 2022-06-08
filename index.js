const video = document.getElementById("my-video");
const music = document.getElementById("music-player");
const audio = document.getElementById("audio")
let playVideoBtn = document.getElementById("btn-change-background")

function playPauseTrack() {
    if(audio.paused) {
        audio.play();
        playPauseTrackBtn.innerHTML = '<i id="fa fa-pause-circle fa-3x"></i>';
    } else {
        audio.pause();
        playPauseTrackBtn.innerHTML = '<i id="fa fa-play-circle fa-3x"></i>';
    }
}