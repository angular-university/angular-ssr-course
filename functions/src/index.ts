
import * as angularUniversal from 'angular-universal-express-firebase';

const DIST_DIR =  __dirname + '/../../dist';

export let ssrApp = angularUniversal.trigger({
    staticDirectory:  DIST_DIR + '/browser',
    index: DIST_DIR + '/browser/index.html',
    main: DIST_DIR + '/server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 600,
    browserCacheExpiry: 300,
    staleWhileRevalidate: 120
});

