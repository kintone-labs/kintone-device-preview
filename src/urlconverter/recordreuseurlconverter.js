export default class RecordCopyUrlConverter {
    constructor() {
        this.re = /\/k\/(\d+)\/edit\?record=(\d+)/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/' + matches[1] + '/edit?record=' + matches[2] + '&reuse=true';
    }
}
