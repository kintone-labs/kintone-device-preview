export default class SpaceIndexUrlConverter {
    constructor() {
        this.re = /\/k\/#\/space\/(.+)/;
    }

    canSupportUrl(url) {
        return this.re.test(url);
    }

    convertToMobileUrl(location) {
        let matches = location.href.match(this.re);
        return location.origin + '/k/#/space/' + matches[1];
    }
}
