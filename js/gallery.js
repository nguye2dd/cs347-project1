const popup = document.getElementById('img-popup');

const images = document.getElementsByClassName('img-icon');
const content = document.getElementById('img-content');
const captionText = document.getElementById('caption');

// add action listeners to all the image icons so when clicked, itll show up on the content
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    popup.style.display = 'block';
    content.src = images[i].src;
    captionText.innerHTML = images[i].alt;
  });
}

// configure the close button to close the popup when clicked on
const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
