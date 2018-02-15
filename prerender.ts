
import {renderModuleFactory} from '@angular/platform-server';


const {AppServerModuleNgFactory} = require('./dist-server/main.bundle');




renderModuleFactory(AppServerModuleNgFactory, {
    document:
});