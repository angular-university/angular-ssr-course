

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {Lesson} from "../model/lesson";
import {map} from 'rxjs/operators';



@Injectable()
export class CoursesService {

    static readonly API_URL = 'https://angular-universal-course-ebcc3.firebaseio.com';

    constructor(private http: HttpClient) {

    }

    findCourseById(courseId: string): Observable<Course> {
        return this.http.get<Course>(`${CoursesService.API_URL}/courses/${courseId}.json`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(`${CoursesService.API_URL}/courses.json`);
    }

    findAllCourseLessons(courseId:string): Observable<Lesson[]> {
        return this.http.get<Lesson[]>(`${CoursesService.API_URL}/lessons/${courseId}.json`);
    }
}