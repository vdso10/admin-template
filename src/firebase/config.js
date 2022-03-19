
import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { initializeApp } from 'firebase/app'



const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID

}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

/*
if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBP3Bv53BTBkvAZpBI06GFcsts6sS56yJs",
        authDomain: "admin-template-estudo.firebaseapp.com",
        projectId: "admin-template-estudo",
        storageBucket: "admin-template-estudo.appspot.com",
        messagingSenderId: "39548866380",
        appId: "1:39548866380:web:36622b0e115beec52cc9e9"
    })
}
*/

export default firebase

// Initialize Firebase
//const app = initializeApp(firebaseConfig);