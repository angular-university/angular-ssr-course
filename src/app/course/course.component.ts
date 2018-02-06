import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import {Lesson} from '../model/lesson';
import {Meta, Title} from '@angular/platform-browser';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


    course:Course;

    dataSource: MatTableDataSource<Lesson>;

    displayedColumns= ["seqNo", "description", "duration"];


    constructor(
        private route: ActivatedRoute,
        private coursesService: CoursesService,
        private titleService: Title,
        private metaService: Meta) {

    }



    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

        this.dataSource = new MatTableDataSource([]);

        this.coursesService.findAllCourseLessons(this.course.id)
            .subscribe(lessons => this.dataSource.data = lessons);


        this.titleService.setTitle(this.course.description);
        this.metaService.addTag({name: "description", content: this.course.longDescription});


        this.metaService.addTag({name: "twitter:card", content: "summary"});
        this.metaService.addTag({name: "twitter:site", content: "@AngularUniv"});
        this.metaService.addTag({name: "twitter:creator", content: "@AngularUniv"});

        this.metaService.addTag({property:"og:url", content: "https://angular-university.io"});
        this.metaService.addTag({property:"og:title", content: this.course.description});
        this.metaService.addTag({property:"og:description", content: this.course.longDescription});
        this.metaService.addTag({property:"og:image", content: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png"});
    }


}
