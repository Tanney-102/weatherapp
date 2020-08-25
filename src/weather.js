const $weatherContainer = document.querySelector('.weather-container');
const $backBtn = document.querySelector('.back-btn');
const $weatherArea = document.querySelector('.weather-area');

$backBtn.addEventListener('click', () => { location.replace('./index.html') });
renderPage();


//
// functions
function renderPage() {
    const query = decodeURI(document.URL).split('?')[1];
    const parentName = query.split('&')[0].split('=')[1];
    const childName = query.split('&')[1].split('=')[1];

    
}