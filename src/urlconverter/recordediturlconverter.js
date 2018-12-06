export default class RecordEditUrlConverter {
    constructor() {
        this.re = /\/k\/(\d+)\/show#record=(\d+).*&mode=edit.*/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/' + matches[1] + '/edit?record=' + matches[2];
    }
}

