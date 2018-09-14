import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public loginService: LoginService) {
   }

  loggedIn() {
    return this.loginService.loggedIn();
  }
}
