const games = document.querySelectorAll('.game');
const photos = document.querySelectorAll('.photo');
let currentGameIndex = 0;
let currentPhotoIndex = 0;

function updateGameNavigation() {
    const backBtn = document.querySelectorAll('#back-btn')[currentGameIndex];
    const nextBtn = document.querySelectorAll('#next-btn')[currentGameIndex];
    const downloadBtn = document.querySelectorAll('#download-btn')[currentGameIndex];

    backBtn.style.display = currentGameIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentGameIndex < games.length - 1 ? 'block' : 'none';
    downloadBtn.style.display = 'block';
    downloadBtn.classList.add('inactive');
}

function showNextGame() {
    games[currentGameIndex].classList.add('fade-out');
    setTimeout(() => {
        games[currentGameIndex].style.display = 'none';
        currentGameIndex = (currentGameIndex + 1) % games.length;
        games[currentGameIndex].style.display = 'block';
        games[currentGameIndex].classList.remove('fade-out');
        games[currentGameIndex].classList.add('fade-in');
        updateGameNavigation();
    }, 500);
}

function showPreviousGame() {
    games[currentGameIndex].classList.add('fade-out');
    setTimeout(() => {
        games[currentGameIndex].style.display = 'none';
        currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
        games[currentGameIndex].style.display = 'block';
        games[currentGameIndex].classList.remove('fade-out');
        games[currentGameIndex].classList.add('fade-in');
        updateGameNavigation();
    }, 500);
}

function updatePhotoNavigation() {
    const photoBackBtn = document.querySelectorAll('#photo-back-btn')[currentPhotoIndex];
    const photoNextBtn = document.querySelectorAll('#photo-next-btn')[currentPhotoIndex];

    photoBackBtn.style.display = currentPhotoIndex > 0 ? 'block' : 'none';
    photoNextBtn.style.display = currentPhotoIndex < photos.length - 1 ? 'block' : 'none';
}

function showNextPhoto() {
    photos[currentPhotoIndex].classList.add('fade-out');
    setTimeout(() => {
        photos[currentPhotoIndex].style.display = 'none';
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].style.display = 'block';
        photos[currentPhotoIndex].classList.remove('fade-out');
        photos[currentPhotoIndex].classList.add('fade-in');
        updatePhotoNavigation();
    }, 500);
}

function showPreviousPhoto() {
    photos[currentPhotoIndex].classList.add('fade-out');
    setTimeout(() => {
        photos[currentPhotoIndex].style.display = 'none';
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        photos[currentPhotoIndex].style.display = 'block';
        photos[currentPhotoIndex].classList.remove('fade-out');
        photos[currentPhotoIndex].classList.add('fade-in');
        updatePhotoNavigation();
    }, 500);
}

// Initial setup
updateGameNavigation();
updatePhotoNavigation();
