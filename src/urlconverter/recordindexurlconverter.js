export default class RecordIndexUrlConverter {
    constructor() {
        this.re = /\/k\/(\d+)\/(\?view=\d+)?/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/' + matches[1] + '/' + (matches[2] || '');
    }
}
