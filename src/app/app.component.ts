import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    constructor(private titleService: Title, private metaService: Meta) {

    }

    ngOnInit() {

        this.titleService.setTitle("BLAH!!");
        this.metaService.addTag({name: "twitter:card", content: "BLAH"});

    }

}
