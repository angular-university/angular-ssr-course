import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from 'rxjs';
import {Lesson} from '../model/lesson';
import {Meta, Title} from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
    imports: [NgIf, MatProgressSpinnerModule, MatTableModule]
})
export class CourseComponent implements OnInit {


    course:Course;

    dataSource: MatTableDataSource<Lesson>;

    displayedColumns= ["seqNo", "description", "duration"];


    constructor(
        private route: ActivatedRoute,
        private coursesService: CoursesService) {

    }



    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

        this.dataSource = new MatTableDataSource([]);

        this.coursesService.findAllCourseLessons(this.course.id)
            .subscribe(lessons => this.dataSource.data = lessons);

    }


}
