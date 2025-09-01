import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Landing } from './landing/landing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([{ path: '', component: Landing }])
  ]
};
