

import Pagination from 'tui-pagination'; /* ES6 */
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGallery } from "./js/render-functions";
import { UnsplashAPI } from "./js/UnsplashAPI";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// const lightbox = new SimpleLightbox('.gallery a');


const gallery = document.querySelector('.js-gallery');
const container = document.getElementById('tui-pagination-container');
const options = { // below default value of options
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1,}
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const service = new UnsplashAPI();
service.getPopularPhotos(page).then(data => {console.log(data)
    const markup = createGallery(data.results)
    pagination.reset(data.total);
gallery.innerHTML = markup;
new SimpleLightbox('.js-gallery a').refresh();
}
);

pagination.on('afterMove', (event) => {
    const currentPage = event.page;
    console.log(currentPage);
    service.getPopularPhotos(currentPage).then(data => {console.log(data)
        const markup = createGallery(data.results)
        // pagination.reset(data.total);
    gallery.innerHTML = markup;
    new SimpleLightbox('.js-gallery a').refresh();
})
    }
    );