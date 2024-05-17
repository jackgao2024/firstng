import { withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firstng';
  firstName = 'Jack';
  lastName = 'Gao';
  profileImage =
    'https://pbs.twimg.com/profile_images/1509653371367485448/LVA75u3y_x96.png';
  widthValue = 40;
  heightValue = 40;
  borderValue = 'red';
  status = 'online';

  setAlert() {}

  // let obj = new AppComponent();

  // userName(firstN, lastN){

  //     obj.firstName =firstN;
  //     obj.lastName = lastN;

  // }
}
