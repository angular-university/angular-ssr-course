import {COURSES, LESSONS} from './db-data';


const firebase = require('firebase');

// Required for side-effects
require('firebase/firestore');


firebase.initializeApp({
    apiKey: 'AIzaSyDwy9NEi2xjr4g0iknlleiXufOkEQK2HhI',
    authDomain: 'angular-universal-course.firebaseapp.com',
    databaseURL: 'https://angular-universal-course.firebaseio.com',
    projectId: 'angular-universal-course',
    storageBucket: 'angular-universal-course.appspot.com',
    messagingSenderId: '835053456827'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


console.log('Populating Firestore database, make sure to have write permissions ...');


Promise.all([
    db.collection('courses').add(COURSES),
    db.collection('lessons').add(LESSONS)
])
    .then(function (docRef:any) {
        console.log('Document written!');
        process.exit(0);
    })
    .catch(function (error) {
        console.error('Error adding document: ', error);
        process.exit(1);
    });




