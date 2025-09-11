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
  display = true;

  displayOneDiv = true;
  hideButton() {
    this.display = false;
  }
  showButton() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  toggleOneDiv() {
    this.displayOneDiv = !this.displayOneDiv;
  }
}
