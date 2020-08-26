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
    const parentName = query.split('&')[0].split('=')[1];
    const childName = query.split('&')[1].split('=')[1];
    
    $weatherHeader.innerHTML = parentName + ' > ' + childName;

    getEngAddr(parentName, childName)
    .then(res => {
        $weatherArea.innerHTML = `
                <h3>한글주소명 : ${parentName} ${childName}</h3>
                <h3>영문주소명 : ${res[0]} ${res[1]}</h3>
            `
    });
}

async function getEngAddr(parentName, childName) {
    const url_base = `https://ko-en-trans.herokuapp.com/translate?text=`;
    config = {
        method: 'get',
    };

    const p_engAddr = await fetch(url_base + parentName, config)
                            .then(res => { return res.json() })
                            .then(data => {
                                engAddr.push(data.message.result.translatedText);
                            });
    const c_engAddr = await fetch(url_base + childName, config)
                            .then(res => { return res.json() })
                            .then(data => {
                                engAddr.push(data.message.result.translatedText);
                            });
    
    return [p_engAddr, c_engAddr];
}