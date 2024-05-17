import { Component } from '@angular/core';
import { Uxprojects } from '../interfaces/uxprojects';

@Component({
  selector: 'app-uxdesign',
  standalone: true,
  imports: [],
  templateUrl: './uxdesign.component.html',
  styleUrl: './uxdesign.component.scss',
})
export class UxdesignComponent {
  projects: Uxprojects[] = [
    {
      projectID: 1,
      projectName: 'Interface Design',
      projectImage: '../../assets/ux design.png',
      projectURLContent:
        'https://www.figma.com/design/rDvB6pEVSUEXd82oXRBOpl/homePage%2FshopPage%2FproductPage-wireframe?node-id=0%3A1&t=3grEYxy4bqu6WER5-1',
      projectCourseName: 'UX Design',
    },
    {
      projectID: 2,
      projectName: 'UX EXAMPLE1',
      projectImage: 'assets/theCakery.png',
      projectURLContent:
        'file:///C:/VanartsWebDesignProgram/Business%20concepts/secondWEB/UpdatedProject2TheCakery/pages/index.html',
      projectCourseName: 'UX Design',
    },
    {
      projectID: 3,
      projectName: 'UX EXAMPLE2',
      projectImage: 'assets/web.png',
      projectURLContent:
        'file:///C:/VanartsWebDesignProgram/WEB24/JS/week4T2Project/week4T2Project.html',
      projectCourseName: 'UX Design',
    },
  ];
}
