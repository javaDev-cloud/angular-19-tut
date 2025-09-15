import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
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
  count: WritableSignal<number> = signal(0);
  displayHeader = false;

  constructor() {
    effect(() => {
      //console.log(this.count());
      if (this.count() == 2) {
        this.displayHeader = true;
        setTimeout(() => {
          this.displayHeader = false;
        }, 2000);
      } else {
        this.displayHeader = false;
      }
    });
  }

  handleSignal(val: string) {
    if (val == 'inc') {
      //set() and update() is only for writable signal
      this.count.set(this.count() + 1);
    } else if (val == 'dec' && this.count() > 0) {
      this.count.set(this.count() - 1);
    }
  }
}
