(function() {

    function getMobileUrl(location) {
        return location.origin + '/k/m/'
    }

    const mobileUrl = getMobileUrl(location);
    const previewEl = document.createElement('a');
    previewEl.className = 'device-preview';
    previewEl.setAttribute('href', mobileUrl);
    previewEl.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(mobileUrl, '_blank', 
        'width=375,height=667,top=10,left=10');
    });
    const linksEl = document.querySelector('.gaia-header-toolbar-links');
    linksEl.appendChild(previewEl);
})();
