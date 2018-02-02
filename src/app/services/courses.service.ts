

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course} from "../model/course";
import {first, map, tap} from 'rxjs/operators';
import {Lesson} from "../model/lesson";
import {AngularFirestore} from 'angularfire2/firestore';


@Injectable()
export class CoursesService {

    constructor(private afs: AngularFirestore) {

    }

    findCourseById(courseId: string): Observable<Course> {
        return this.afs.collection('courses').doc<Course>(courseId).valueChanges();
    }

    findAllCourses(): Observable<Course[]> {
        return this.afs.collection<Course>('courses').valueChanges();
    }

    findAllCourseLessons(courseId:string): Observable<Lesson[]> {
        return this.afs.collection<Lesson>('lessons', ref => ref.where('courseId', '==', courseId)).valueChanges();
    }

}