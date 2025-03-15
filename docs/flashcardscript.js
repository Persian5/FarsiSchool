function flipCard(card) {
    card.classList.toggle('flipped');
}

// Function to play the correct MP3 file
function playAudio(file, event) {
    event.stopPropagation(); // Prevent flip when clicking the sound button
    let audio = new Audio(`../audios1/${file}`); // Adjusted to match your structure
    audio.play();
}
