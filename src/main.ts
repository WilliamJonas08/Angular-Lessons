// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// Bootstrap the application Module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
