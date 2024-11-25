const a = setInterval(() => {
    if(document.visibilityState == "visible") {
        videoelements = document.getElementsByTagName("video");
        clearInterval(a);
    }
}, 500);

const pauseVideo = () => {
    if (videoelements) {
        const player = videoelements.length >= 1 ? videoelements[0] : null;
        if (document.hidden) {
            if (player) {
                player.pause();
            }
        }
        else {
            if (player) {
                player.play();
            }
        }
    }
}

document.addEventListener("visibilitychange", pauseVideo);
