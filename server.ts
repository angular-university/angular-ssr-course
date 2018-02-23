
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {renderModuleFactory} from '@angular/platform-server';
import * as express from 'express';
import { readFileSync } from 'fs';
import { enableProdMode } from '@angular/core';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const {AppServerModuleNgFactory} = require('./dist-server/main.bundle');

enableProdMode();

const app = express();

const indexHtml = readFileSync(__dirname + '/dist/index.html', 'utf-8').toString();







app.listen(9000, () => {
    console.log(`Angular Universal Node Express server listening on http://localhost:9000`);
});





