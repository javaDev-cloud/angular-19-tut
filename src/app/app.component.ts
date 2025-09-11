import { Component, effect, signal } from '@angular/core';
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
  data = 100;
  count = signal(10);

  constructor() {
    effect(() => {
      //console.log(this.data);
      console.log(this.count());
    });
  }

  handleSignal(val: string) {
    if (val == 'inc') {
      //this.data = 200;
      this.count.set(this.count() + 1);
    } else if (val == 'dec' && this.count() > 0) {
      //this.data = this.data - 1;
      this.count.set(this.count() - 1);
    }
  }
}
