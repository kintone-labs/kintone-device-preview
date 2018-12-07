(function() {

    function createPreviewLink() {
        const previewEl = document.createElement('a');
        previewEl.className = 'device-preview';
        previewEl.setAttribute('href', '#');
        previewEl.setAttribute('aria-label', 'Open Mobile Preview');
        previewEl.setAttribute('title', 'Open Mobile Preview');
        previewEl.addEventListener('click', function(event) {
            event.preventDefault();
            chrome.runtime.sendMessage({url: location.href}, function() {
            });
        });
        return previewEl;
    }

    const linksEl = document.querySelector('.gaia-header-toolbar-links');
    linksEl.appendChild(createPreviewLink());
})();
