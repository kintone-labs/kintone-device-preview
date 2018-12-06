import ReportUrlConverter from './urlconverter/reporturlconverter';
import RecordAddUrlConverter from './urlconverter/recordaddurlconverter';
import RecordDetailUrlConverter from './urlconverter/recorddetailurlconverter';
import RecordEditUrlConverter from './urlconverter/recordediturlconverter';
import RecordIndexUrlConverter from './urlconverter/recordindexurlconverter';
import RecordReuseUrlConverter from './urlconverter/recordreuseurlconverter';
import SearchUrlConverter from './urlconverter/searchurlconverter';
import SpaceIndexUrlConverter from './urlconverter/spaceindexurlconverter';

(function() {

    function getMobileUrl(location) {
        const converters = [
            new ReportUrlConverter(),
            new RecordEditUrlConverter(),
            new RecordReuseUrlConverter(),
            new RecordAddUrlConverter(),
            new RecordDetailUrlConverter(),
            new RecordIndexUrlConverter(),
            new SearchUrlConverter(),
            new SpaceIndexUrlConverter()
        ];
        const converter = converters.find(converter => converter.canSupportUrl(location.href));
        if (converter) {
            return converter.convertToMobileUrl(location);
        }
        return location.origin + '/k/m/';
    }

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
