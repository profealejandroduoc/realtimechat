// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const environment = {
  production: true,
  firebaseConfig :{
    apiKey: "AIzaSyAJQL175PafxBKekFnAnms-fJJTtVZZaJg",
    authDomain: "ionicchatejemplo.firebaseapp.com",
    projectId: "ionicchatejemplo",
    storageBucket: "ionicchatejemplo.firebasestorage.app",
    messagingSenderId: "1076471212903",
    appId: "1:1076471212903:web:26cf39df2366ab01f11dc2",
    measurementId: "G-N2FVVJB8Z4"
  },
  

  // Initialize Firebase


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */


