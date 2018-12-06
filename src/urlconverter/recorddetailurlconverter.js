export default class RecordDetailUrlConverter {
    constructor() {
        this.re = /\/k\/(\d+)\/show#record=(\d+)/
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/m/' + matches[1] + '/show?record=' + matches[2];
    }
}

