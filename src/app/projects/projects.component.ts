import { Component } from '@angular/core';
import { Projects } from '../interfaces/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Projects[] = [
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
      projectName: 'The Cakery',
      projectImage: 'assets/theCakery.png',
      projectURLContent:
        'file:///C:/VanartsWebDesignProgram/Business%20concepts/secondWEB/UpdatedProject2TheCakery/pages/index.html',
      projectCourseName: 'Project Management',
    },
    {
      projectID: 3,
      projectName: 'Video Blog',
      projectImage: 'assets/web.png',
      projectURLContent:
        'file:///C:/VanartsWebDesignProgram/WEB24/JS/week4T2Project/week4T2Project.html',
      projectCourseName: 'HTML&CSS',
    },
    {
      projectID: 4,
      projectName: 'About me Webpage',
      projectImage: '../../assets/aboutme.png',
      projectURLContent:
        'file:///C:/VanartsWebDesignProgram/WEB24/Sep9/Week4/About%20Me/allHtmlFiles/AboutMe.html',
      projectCourseName: 'HTML&CSS',
    },
    {
      projectID: 5,
      projectName: 'Hotel Website',
      projectImage: '../../assets/hotel.png',
      projectURLContent:
        'file:///C:/VanartsWebDesignProgram/WEB24/Sep9/Week4/About%20Me/allHtmlFiles/HotelWebsite.html',
      projectCourseName: 'Project Management',
    },
  ];
}
