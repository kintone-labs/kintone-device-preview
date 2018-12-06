export default class RecordAddUrlConverter {
    constructor() {
        this.re = /\/k\/(\d+)\/edit/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/' + matches[1] + '/edit';
    }
}
