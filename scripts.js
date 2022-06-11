window.addEventListener('load', () => {
    const spanAreaSpan = document.querySelector('.span-area > span');
    const logoLogoSize = document.querySelector('.logo > logo-size');
    const downloadBtn = document.querySelector('.download-btn');
    spanAreaSpan.addEventListener('click', () => {
        window.open('https://' + (window.location.hostname).toString() + '/MJM-video-player', '_self');
    }, false);
    logoLogoSize.addEventListener('click', () => {
        window.open('https://' + (window.location.hostname).toString() + '/MJM-video-player', '_self');
    }, false);
    downloadBtn.addEventListener('mousedown', () => {
        downloadBtn.classList.add('hidden');
    }, false);
}, false);
