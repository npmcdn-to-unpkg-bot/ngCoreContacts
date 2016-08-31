/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '../facade/exceptions';
// asset:<package-name>/<realm>/<path-to-module>
var _ASSET_URL_RE = /asset:([^\/]+)\/([^\/]+)\/(.+)/;
/**
 * Interface that defines how import statements should be generated.
 */
export class ImportGenerator {
    static parseAssetUrl(url) { return AssetUrl.parse(url); }
}
export class AssetUrl {
    constructor(packageName, firstLevelDir, modulePath) {
        this.packageName = packageName;
        this.firstLevelDir = firstLevelDir;
        this.modulePath = modulePath;
    }
    static parse(url, allowNonMatching = true) {
        const match = url.match(_ASSET_URL_RE);
        if (match !== null) {
            return new AssetUrl(match[1], match[2], match[3]);
        }
        if (allowNonMatching) {
            return null;
        }
        throw new BaseException(`Url ${url} is not a valid asset: url`);
    }
}
//# sourceMappingURL=path_util.js.map