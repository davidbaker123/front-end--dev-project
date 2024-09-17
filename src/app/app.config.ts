import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'littel-liguist',
        appId: '1:393825781490:web:d97cf31d744cabd6f9726b',
        storageBucket: 'littel-liguist.appspot.com',
        apiKey: 'AIzaSyCXZA7mDqEnTndLcNh54V-Mbam_cHNBkWo',
        authDomain: 'littel-liguist.firebaseapp.com',
        messagingSenderId: '393825781490',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
