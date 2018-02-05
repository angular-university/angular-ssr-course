import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {renderModuleFactory} from '@angular/platform-server';
import {enableProdMode} from '@angular/core';

import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';

enableProdMode();


const indexHtml = readFileSync(join(process.cwd(),'dist', 'index.html'), 'utf-8').toString();

const {AppServerModuleNgFactory} = require('./dist-server/main.bundle');


console.log("Pre-rendering index.html");


renderModuleFactory(AppServerModuleNgFactory, {
    document: indexHtml,
    url: '/'
})
.then(html => {
    console.log("Pre-rendering successful, saving prerender.html");
    writeFileSync('./prerender.html', html);

})
.catch(error => {
    console.error("Error occurred:", error);
});



