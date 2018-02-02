
import {fireStoreConfig} from './src/environments/firestore-config';
import {COURSES, LESSONS} from './server/db-data';


const firebase = require('firebase');

// Required for side-effects
require('firebase/firestore');


firebase.initializeApp(fireStoreConfig);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();


console.log('Populating Firestore database, make sure to have write permissions ...');


// Get a new write batch
const batch = db.batch();


COURSES.forEach(course => {
    const courseRef = db.collection('courses').doc(course.id);
    batch.set(courseRef, course);
});

LESSONS.forEach(lesson => {
    const lessonRef = db.collection('lessons').doc(lesson.id);
    batch.set(lessonRef, lesson);
});



// Commit the batch
batch.commit()
    .then(() => {
        console.log('Document written!');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error adding document: ', error);
        process.exit(1);
    });






