let currentIndex = 0;
const totalImages = 5;

function updateGallery(index) {
  const images = document.querySelectorAll('.gallery-main-img');
  const dots = document.querySelectorAll('.gallery-dot');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  thumbs.forEach(thumb => thumb.classList.remove('active'));

  currentIndex = (index + totalImages) % totalImages;

  images[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
  thumbs[currentIndex].classList.add('active');
}

function changeGallery(direction) {
  updateGallery(currentIndex + direction);
}

function goToGallery(index) {
  updateGallery(index);
}

// Auto-advance every 5 seconds
setInterval(() => {
  changeGallery(1);
}, 5000);
