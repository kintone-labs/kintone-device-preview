export default class ReportUrlConverter {
    constructor() {
        this.re = /\/k\/(\d+)\/report\?(.*)/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/' + matches[1] + '/report?' + matches[2];
    }
}
