import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "work", component: WorkComponent},
    {path: "courses", component: CoursesComponent},
    {path: "hobbies", component: HobbiesComponent}
];
