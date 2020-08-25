const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

document.querySelector('.select-location-container').style.height = viewportHeight*0.65 + 'px';
document.querySelector('main').style.height = viewportHeight*0.9 + 'px';