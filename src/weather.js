const $weatherContainer = document.querySelector('.weather-container');
const $weatherHeader = document.querySelector('.weather-header');
const $backBtn = document.querySelector('.back-btn');
const $weatherArea = document.querySelector('.weather-area');

$backBtn.addEventListener('click', () => { location.replace('/') });
renderPage();


//
// functions
function renderPage() {
    const query = decodeURI(document.URL).split('?')[1];
    const splitedQuery = query.split('&');
    console.log(splitedQuery);
    // const parentName = query.split('&')[0].split('=')[1];
    // const childName = query.split('&')[1].split('=')[1];
    // const parentNameEng = query.split('&')[2].split('=')[1];
    // const childNameEng = query.split('&')[3].split('=')[1];
    
    $weatherHeader.innerHTML = parentName + ' > ' + childName;
    $weatherArea.innerHTML = `
            <h3>한글주소명 : ${parentName} ${childName}</h3>
            <h3>영문주소명 : ${parentNameEng} ${childNameEng}</h3>
        `
}