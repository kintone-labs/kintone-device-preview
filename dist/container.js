(function() {

    function getMobileUrl(location) {
        // レコード編集画面
        var re = /\/k\/(\d+)\/show#record=(\d+).*&mode=edit.*/;
        if (re.test(location.href)) {
            var matches = location.href.match(re);
            return location.origin + '/k/m/' + matches[1] + '/edit?record=' + matches[2];
        }

        // レコード詳細画面
        var re = /\/k\/(\d+)\/show#record=(\d+)/;
        if (re.test(location.href)) {
            var matches = location.href.match(re);
            return location.origin + '/k/m/' + matches[1] + '/show?record=' + matches[2];
        }

        // レコード再利用画面
        var re = /\/k\/(\d+)\/edit\?record=(\d+)/;
        if (re.test(location.href)) {
            var matches = location.href.match(re);
            return location.origin + '/k/m/' + matches[1] + '/edit?record=' + matches[2] + '&reuse=true';
        }

        // レコード追加画面
        var re = /\/k\/(\d+)\/edit/;
        if (re.test(location.href)) {
            var matches = location.href.match(re);
            return location.origin + '/k/m/' + matches[1] + '/edit';
        }

        // レコード一覧画面
        var re = /\/k\/(\d+)\/(\?view=\d+)?/;
        if (re.test(location.href)) {
            var matches = location.href.match(re);
            return location.origin + '/k/m/' + matches[1] + '/' + (matches[2] || '');
        }

        // 検索画面
        var re = /\/k\/search\?keyword=([^\&]+)(&app=(\d+))?/;
        if (re.test(location.href)) {
            var matches = location.href.match(re);
            return location.origin + '/k/m/search?keyword=' + matches[1] + (matches[2] || '');
        }

        return location.origin + '/k/m/'
    }

    const previewEl = document.createElement('a');
    previewEl.className = 'device-preview';
    previewEl.setAttribute('href', '#');
    previewEl.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(getMobileUrl(location), '_blank',
        'width=375,height=667,top=10,left=10');
    });
    const linksEl = document.querySelector('.gaia-header-toolbar-links');
    linksEl.appendChild(previewEl);
})();
