import { Component } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students: Student[] = [
    { id: 1, name: 'jack', country: 'Canada' },
    {
      id: 2,
      name: 'David',
      country: 'Canada',
    },
    { id: 3, name: 'Meizhen Zhang', country: 'China' },
  ];
}
