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
  count: number = 0;

  handleClickbutton(val: String) {
    console.log(val);
    if (val == 'plus') {
      this.count++;
    } else if (val == 'minus' && this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }
  }

  handleEvent(event: Event) {
    console.log('event triggered: ', event.type);
    console.log('event triggered: ', (event.target as HTMLInputElement).name);
    console.log('event triggered: ', (event.target as HTMLInputElement).value);
  }
}
