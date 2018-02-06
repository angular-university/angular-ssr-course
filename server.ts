
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');


enableProdMode();

const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist');

const indexHtml = readFileSync(join(DIST_FOLDER, 'index.html'), 'utf-8').toString();


/*

// simplified demo of how rendering is done on the server
app.route('/').get((req, res) => {

    renderModuleFactory(AppServerModuleNgFactory, {
        document: indexHtml,
        url: '/'
    })
    .then(html => res.status(200).send(html));

});

*/


app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);


// Server static files
app.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});




// Start up the Node server
app.listen(9000, () => {
    console.log(`Angular Universal Node Express server listening on http://localhost:9000`);
});