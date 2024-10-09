

import Pagination from 'tui-pagination'; /* ES6 */
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGallery } from "./js/render-functions";
import { UnsplashAPI } from "./js/UnsplashAPI";
import iziToast from 'izitoast';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const gallery = document.querySelector('.js-gallery');
const container = document.getElementById('tui-pagination-container');
const form = document.querySelector('.js-search-form');
const newLoader = document.querySelector('.new_loader');



const options = { // below default value of options
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1,}
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const service = new UnsplashAPI();
showElement(newLoader);
service.getPopularPhotos(page).then(data => {console.log(data)
    const markup = createGallery(data.results)
    pagination.reset(data.total);
gallery.innerHTML = markup;
}
)
.catch ((error) => {
    console.log(error);
    iziToast.error({message: 'Error'})
   }) 
.finally (() => {
    hideElement(newLoader);
});

pagination.on('afterMove', popular);

    function popular(event) {
        showElement(newLoader);
            const currentPage = event.page;
            console.log(currentPage);
            service.getPopularPhotos(currentPage).then(data => {console.log(data)
                const markup = createGallery(data.results)
                // pagination.reset(data.total);
            gallery.innerHTML = markup;
        })
           .catch ((error) => {
            console.log(error);
            iziToast.error({message: 'Error'})
           }) 
        .finally (() => {
            hideElement(newLoader);
        })}

    form.addEventListener('submit', search);

    async function search(event) {
        event.preventDefault();
        const searchValue = event.target.elements.query.value.trim();
        if (!searchValue) {
            iziToast.info({message: "Enter something to search!"})
            return
        }
        pagination.off('afterMove', popular);
        pagination.off('afterMove', byQuery);
        service.query = searchValue;
        showElement(newLoader);
        try {
            const data = await service.getPhotosByQuery(page);
            if (data.results.length === 0) {
                iziToast.warning({message: 'Not found'})
                hideElement(container);
                return
            }
            if (data.results.length < 12) {
                hideElement(container);
            } else {
                showElement(container);
            }
            const markup = createGallery(data.results);
            gallery.innerHTML = markup;
            pagination.reset(data.total);
        } catch (error) {
            console.log(error);
            iziToast.error({message: 'Error'})
        }
        finally {
            hideElement(newLoader);
            form.reset();
        }
        pagination.on('afterMove', byQuery);
    }

    function byQuery(event) {
        showElement(newLoader);
        const currentPage = event.page;
            console.log(currentPage);
            service.getPhotosByQuery(currentPage).then(data => {console.log(data)
                const markup = createGallery(data.results)
                // pagination.reset(data.total);
            gallery.innerHTML = markup;
        })
        .catch ((error) => {
            console.log(error);
            iziToast.error({message: 'Error'})
           }) 
        .finally (() => {
            hideElement(newLoader);
        })}

        gallery.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.nodeName !== 'IMG') {
                return
            }
            const instance = basicLightbox.create(`
                <img src="${event.target.dataset.source}" alt="${event.target.alt}">
            `)
            instance.show();
        })

    function showElement(element) {
        element.classList.remove('is_hidden');
    }

    function hideElement(element) {
        element.classList.add('is_hidden');
    }

    // 1. Створи застосунок для пошуку погоди в своєму місті
// Використовуй API https://openweathermap.org/api
// (Current Weather Data -> Built-in API request by city name)
// створи файл api.js що робитиме запит на бек
// створи файл create-markup.js для створення розмітки (https://prnt.sc/LEataI862RLd)
// додай пошук погоди в конкретному місті використовуючи форму
// 2. Додай в картку з погодою кнопку Save для зберігання
// інформації про погоду в місті в localStorage, щоб при оновленні сторінки
// йшов запит за погодою в збереженому місті
// коли місто збережено, кнопка стає Delete і можна видалити місто, тоді запит
// не буде йти при оновленні сторінки