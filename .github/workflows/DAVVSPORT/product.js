let currentImage = 0;
const images = document.querySelectorAll('.image-slider img');

function showImage(index) {
  images[currentImage].classList.remove('active');
  currentImage = index;
  images[currentImage].classList.add('active');
}
