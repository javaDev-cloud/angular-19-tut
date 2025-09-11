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
  users = ['Munish', 'Bruce', 'Peter', 'Sam'];

  students = [
    { name: 'Munish', age: 20, emailId: 'munish@gmail.com' },
    { name: 'Bruce', age: 30, emailId: 'bruce@gmail.com' },
    { name: 'Peter', age: 70, emailId: 'peter@gmail.com' },
    { name: 'Sam', age: 26, emailId: 'sam@gmail.com' },
  ];
}
