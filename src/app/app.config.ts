import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
    
          apiKey: "AIzaSyCWQB56XRCW24pjkVLDkJ9KeBPVl-EXMY0",
          authDomain: "angular-task-ba85e.firebaseapp.com",
          projectId: "angular-task-ba85e",
          storageBucket: "angular-task-ba85e.firebasestorage.app",
          messagingSenderId: "11047000662",
          appId: "1:11047000662:web:f33782e0706cf3003179f7"
        
      })
    ),
    provideAuth(() => getAuth())
  ]
};
