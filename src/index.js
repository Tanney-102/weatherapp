const $locHeader = document.querySelector('.location-header');
const $locSelectArea = document.querySelector('.location-select-area');
const $backBtn = document.querySelector('.back-btn');

renderAreaBtns();
$backBtn.addEventListener('click', renderAreaBtns);
fetch('https://weather-refugee-camp.netlify.app/areaTree.json', {method:'get'})
.then(res => { return res.json() })
.then(data => console.log(data));

//
//functions
function renderAreaBtns() {
    $locHeader.innerHTML = '지역선택';
    $backBtn.style.display = 'none';
    $locSelectArea.innerHTML = '';

    getAreaCode()
    .then( areas => {
        areas.forEach(_area => {
            // _area = [code, name]
            // name = area name, value = area code
            $locSelectArea.innerHTML += `
                <button name="${_area[1]}" value="${_area[0]}" class="location-btn btn-hover">
                    ${_area[1]}
                </button>
            `;
        });

        for(let i=0; i<areas.length; i++) {
            $locSelectArea.children[i].addEventListener('click', renderSubAreaBtns);
        }
    });


}

async function getAreaCode(code) {
    const key = '8mVPSCRQrFyWbjSf4iKzswPjcu%2FRFGP1stNocEROwnzupvjPfF6MTVT5TSQRCwunx0HAcrMRDghtU0HKFRZumw%3D%3D'
    const url_base = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=${key}&MobileOS=ETC&MobileApp=AppTesting&numOfRows=30`
    const url = getAreaCodeURL(code, url_base);
    const config = {
        method: 'get',
    }

    const areas = await fetch(url, config)
    .then(res => res.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(doc => {
        const items = doc.getElementsByTagName('item');
        const areas = [];
        for(let i=0; i<items.length; i++) {
            const _area = [items[i].children[0].innerHTML, items[i].children[1].innerHTML];
            areas.push(_area);
        }

        return areas;
    })
    .catch(err => console.error(err));

    return areas;
}

function getAreaCodeURL(code, url_base) {
    if(code)
        return url_base + '&areaCode=' + code;
    return url_base;
}

function renderSubAreaBtns(e) {
    const parentArea = {
        'name' : e.target.name,
        'code' : e.target.value,
    };
    
    $locHeader.innerHTML = parentArea.name;
    $backBtn.style.display = 'block';
    $locSelectArea.innerHTML = ''

    getAreaCode(parentArea.code)
    .then( areas => {
        areas.forEach(_area => {
            const url = encodeURI(`./weather.html?parentName=${parentArea.name}&childName=${_area[1]}`);

            // _area = [code, name]
            // name = area name, value = area code
            $locSelectArea.innerHTML += `
                <button name="${_area[1]}" value="${_area[0]}" class="location-btn btn-hover">
                    <a href="${url}" class="a-in-btn">
                        ${_area[1]}
                    </a>
                </button>
            `;
        });

        // for(let i=0; i<areas.length; i++) {
        //     $locSelectArea.children[i].addEventListener('click', (e) => {
        //         loadWeatherPage(e, parentArea);
        //     });
        // }
    });
}

function loadWeatherPage(e, parentArea) {
    const url = `./weather.html?parentName=${parentArea.name}&childName=${e.target.name}`;
    
    location.replace(url);
}