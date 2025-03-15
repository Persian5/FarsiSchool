function flipCard(card) {
    card.classList.toggle('flipped');
}

// Function to play the correct MP3 file
function playAudio(file) {
    let audio = new Audio(`../audios1/${file}`);
    audio.play();
}
