import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ProductsComponent } from './products/products.component';
import { TweetsComponent } from './tweets/tweets.component';
import { ProjectsComponent } from './projects/projects.component';
import { UxdesignComponent } from './uxdesign/uxdesign.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'students', component: StudentsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'tweets',
    component: TweetsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'uxdesign',
    component: UxdesignComponent,
  },
];
