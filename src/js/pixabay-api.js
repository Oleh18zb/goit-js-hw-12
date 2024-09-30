const API_KEY = '46168146-32b0147d59d6daaf7b97d8253';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return response.json();
}