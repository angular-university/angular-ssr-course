import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {CourseComponent} from "./course/course.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {CoursesService} from "./services/courses.service";
import {CourseResolver} from "./services/course.resolver";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './about/about.component';
import {AppShellRenderDirective} from "./directives/app-shell-render.directive";
import {AppShellNoRenderDirective} from "./directives/app-shell-norender.directive";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    AboutComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    CourseResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
