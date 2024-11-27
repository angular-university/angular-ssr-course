import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map, tap} from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [MatTabsModule, CoursesCardListComponent, AsyncPipe]
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {
        this.courses$ = this.coursesService.findAllCourses()
            .pipe(
                map(Object.values)
            );
    }

}
