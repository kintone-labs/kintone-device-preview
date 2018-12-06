export default class RecordAddUrlConverter {
    constructor() {
        this.re = /\/k\/search\?keyword=([^\&]+)(&app=(\d+))?/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/search?keyword=' + matches[1] + (matches[2] || '');
    }
}
