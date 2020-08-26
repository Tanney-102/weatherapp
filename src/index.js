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

    const areas = areaTree.area;
        
    areas.forEach((name, idx) => {
        // name : kor name, value : eng name
        $locSelectArea.innerHTML += `
            <button name="${name}" value="${areaTreeEng.area[idx]}" class="location-btn btn-hover">
                ${name}
            </button>
        `;
    });

    for(let i=0; i<areas.length; i++) {
        $locSelectArea.children[i].addEventListener('click', renderSubAreaBtns);
    }
}

function renderSubAreaBtns(e) {
    const parentName = e.target.name;
    const parentNameEng = e.target.value;
    
    $locHeader.innerHTML = parentName;
    $backBtn.style.display = 'block';
    $locSelectArea.innerHTML = ''

    const areas = areaTree.subArea[parentName];
    const areasEng = areaTreeEng.subArea[parentNameEng];

    areas.forEach((name, idx) => {
        const url = encodeURI(`./weather.html?pName=${parentName}&cName=${name}&pNameE=${parentNameEng}&cNameE=${areasEng[idx]}`);

        $locSelectArea.innerHTML += `
            <button class="location-btn btn-hover">
                <a href="${url}" class="a-in-btn">
                    ${name}
                </a>
            </button>
        `;
    });
}