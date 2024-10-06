
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
let query = '';
let page = 1;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = input.value.trim();
  if (query === '') {
    showError('Please enter a search query');
    return;
  }

  page = 1;
  gallery.innerHTML = '';
  loadMoreBtn.style.display = 'none';
  showLoader();

  try {
    const data = await fetchImages(query, page);
    hideLoader();
    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderImages(data.hits);
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    hideLoader();
    showError('Failed to fetch images. Please try again later.');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await fetchImages(query, page);
    hideLoader();
    renderImages(data.hits);

    if (page * 15 >= data.totalHits) {
      loadMoreBtn.style.display = 'none';
      showError("We're sorry, but you've reached the end of search results.");
    }

    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    hideLoader();
    showError('Failed to fetch images. Please try again later.');
  }
});
