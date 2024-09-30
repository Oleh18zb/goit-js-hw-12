import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    showError('Please enter a search query');
    return;
  }

  showLoader();
  gallery.innerHTML = '';

  try {
    const data = await fetchImages(query);
    hideLoader();
    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    hideLoader();
    gallery.innerHTML = '';
    showError('Failed to fetch images. Please try again later.');
  }
});