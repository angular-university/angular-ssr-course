
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist');
const DIST_SERVER_FOLDER = join(process.cwd(), 'dist-server');

// Our index.html we'll use as our template
const indexHtml = readFileSync(join(DIST_FOLDER, 'index.html'), 'utf-8').toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');


/*
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

*/


app.route('/').get((req, res) => {

    console.log(indexHtml);

    debugger;

    renderModuleFactory(AppServerModuleNgFactory, {
        document: indexHtml,
        url: '/'
    })
    .then(html => res.status(200).send(html));

});



// app.set('view engine', 'html');
// app.set('views', DIST_FOLDER);


/*
// Server static files
app.get('*.*', express.static(join(DIST_FOLDER, 'dist'), {
    maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});

*/


// Start up the Node server
app.listen(9000, () => {
    console.log(`Angular Universal Node Express server listening on http://localhost:9000`);
});