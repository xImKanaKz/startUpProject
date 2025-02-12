console.log("hello");

document.getElementById('play-button').addEventListener('click', function() {
    var video = document.getElementById('video');
    if (video.paused) {
        video.play();  // Video abspielen
        this.style.display = 'none';  // Play-Button ausblenden
    } else {
        video.pause();  // Video pausieren
        this.style.display = 'block';  // Play-Button wieder anzeigen
    }
});

// Zeige den Play-Button, wenn das Video pausiert wird
document.getElementById('video').addEventListener('pause', function() {
    document.getElementById('play-button').style.display = 'block';
});

// Verstecke den Play-Button, wenn das Video abgespielt wird
document.getElementById('video').addEventListener('play', function() {
    document.getElementById('play-button').style.display = 'none';
});
