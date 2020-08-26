const $locHeader = document.querySelector('.location-header');
const $locSelectArea = document.querySelector('.location-select-area');
const $backBtn = document.querySelector('.back-btn');

renderAreaBtns();
$backBtn.addEventListener('click', renderAreaBtns);

//
//functions
function renderAreaBtns() {
    $locHeader.innerHTML = '지역선택';
    $backBtn.style.display = 'none';
    $locSelectArea.innerHTML = '';

    fetch(`${origin_home}areaTree.json`, {method:'get'})
    .then(res => { return res.json() })
    .then(areaTree => {
        const areas = areaTree.area;
        
        areas.forEach(name => {
            $locSelectArea.innerHTML += `
                <button name="${name}" class="location-btn btn-hover">
                    ${name}
                </button>
            `;
        });

        for(let i=0; i<areas.length; i++) {
            $locSelectArea.children[i].addEventListener('click', renderSubAreaBtns);
        }
    });
}

function renderSubAreaBtns(e) {
    const parentName = e.target.name;
    
    $locHeader.innerHTML = parentName;
    $backBtn.style.display = 'block';
    $locSelectArea.innerHTML = ''

    fetch(`${origin_home}areaTree.json`, {method:'get'})
    .then(res => { return res.json() })
    .then(areaTree => {
        const areas = areaTree.subArea[parentName];

        areas.forEach(name => {
            const url = encodeURI(`./weather?parentName=${parentName}&childName=${name}`);

            $locSelectArea.innerHTML += `
                <button class="location-btn btn-hover">
                    <a href="${url}" class="a-in-btn">
                        ${name}
                    </a>
                </button>
            `;
        });
    });
}