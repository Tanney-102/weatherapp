const $weatherContainer = document.querySelector('.weather-container');
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
    const engAddr = []; // [parent, child]
    
    getEngAddr(parentName, 1)
    .then(addr => {
        engAddr.push(addr);
        getEngAddr(childName, 2)
        .then(c_addr => {
            engAddr.push(c_addr);

            $weatherArea.innerHTML = `
                <h3>한글주소명 : ${parentName} ${childName}</h3>
                <h3>영문주소명 : ${engAddr[0]} ${engAddr[1]}</h3>
            `
        })
    })
}

//id 1 : 시도, id 2 : 시군구
async function getEngAddr(addr, id) {
    const _id = id === 1 ? 'siNm' : 'sggNm';
    const key = 'devU01TX0FVVEgyMDIwMDgyNjA0MjAzNzExMDEwNDU='
    const url_base = `https://www.juso.go.kr/addrlink/addrEngApiJsonp.do/`
    const url = `${url_base}?confmKey=${key}&currentPage=1&countPerPage=10&resultType=json&keyword=${addr}`
    const engAddr = await fetch(url, {method:'get'})
                        .then(res => {return res.json(); })
                        .then(juso => { return juso[_id]; });

    return engAddr;
}