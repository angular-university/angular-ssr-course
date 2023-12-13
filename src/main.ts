import {enableProdMode, importProvidersFrom} from '@angular/core';


import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {AppRoutingModule} from './app/app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {provideAnimations} from '@angular/platform-browser/animations';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {CourseResolver} from './app/services/course.resolver';
import {CoursesService} from './app/services/courses.service';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule, MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatDialogModule, AppRoutingModule, MatSelectModule, MatDatepickerModule, ReactiveFormsModule),
      CoursesService,
      CourseResolver,
      provideAnimations(),
      provideHttpClient(withInterceptorsFromDi())
    ]
  })
    .catch(err => console.error(err));
});
