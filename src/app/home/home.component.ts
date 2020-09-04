import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map, tap} from 'rxjs/operators';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService,
                private title: Title) {

    }

    ngOnInit() {

        this.title.setTitle("Angular University - All Courses");

        this.courses$ = this.coursesService.findAllCourses()
            .pipe(
                map(Object.values)
            );
    }

}
