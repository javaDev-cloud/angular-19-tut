import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = '';

  getUserName(event: Event) {
    // this.username = (event.target as HTMLInputElement).value;
  }

  setUsername() {
    this.username = 'Peter';
  }

  getUsernameWithTemplate(val: string) {
    this.username = val;

    console.log(this.username);
  }
}
