
import * as angularUniversal from 'angular-universal-express-firebase';

export let ssrApp = angularUniversal.trigger({
    staticDirectory: __dirname + '/browser',
    index: __dirname + '/browser/index.html',
    main: __dirname + '/server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 600,
    browserCacheExpiry: 300,
    staleWhileRevalidate: 120
});

