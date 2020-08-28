const $weatherHeader = document.querySelector('.weather-header');
const $backBtn = document.querySelector('.back-btn');
const $weatherContent = document.getElementsByClassName('weather-content');

$backBtn.addEventListener('click', () => { location.replace('/') });
renderPage();


//
// functions
const renderPage = () => {
    const query = decodeURI(document.URL).split('?')[1];
    const splitedQuery = query.split('&');
    const parentName = splitedQuery[0].split('=')[1];
    const childName = splitedQuery[1].split('=')[1];
    
    $weatherHeader.innerHTML = parentName + ' > ' + childName;
    
    // renderWeatherArea(parentName, childName);
}

const renderWeatherArea = (pName, cName) => {
    const url = `/weather?region=${pName}-${cName}`;
    const config = {
        method:'get',
    }

    fetch(url, config)
    .then(res => { return res.json() })
    .then(result => {
        result.forEach((_result, idx) => {
            const $curContent = $weatherContent[idx];
            _result.data.forEach(_data => {
                $curContent.innerHTML += `
                <div class="content-container">
                    <div class="date">${_data.date}</div>
                    <div class="weather-info">
                        <div class="weather-state">${_data.state}</div>
                        <div class="temperature">
                            ${_data.state}&deg;C
                        </div>
                    </div>
                </div>
                `;
            });
        });
    });
}