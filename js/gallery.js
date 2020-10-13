const popup = document.getElementById('img-popup');

const images = document.getElementsByClassName('img-icon');
const content = document.getElementById('img-content');
const captionText = document.getElementById('caption');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const closeButton = document.getElementById('close-button');

let currImage = 0; // index of the current image in modal

leftArrow.addEventListener('click',() => {
  if (currImage > 0) {
    currImage = currImage - 1;
    content.src = images[currImage].src;
    captionText.innerHTML = images[currImage].alt;
  } else {
    alert('No more images to move backwards to.');
  }
});

rightArrow.addEventListener('click', () => {
  if (currImage < images.length - 1) {
    currImage = currImage + 1;
    content.src = images[currImage].src;
    captionText.innerHTML = images[currImage].alt;
  } else {
    alert('No more images to move fowards to.');
  }
});

// add action listeners to all the image icons so when clicked, itll show up on the content
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    currImage = i; // set the current image index for switching images in the modal
    popup.style.display = 'block';
    content.src = images[i].src;
    captionText.innerHTML = images[i].alt;
  });
}

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
