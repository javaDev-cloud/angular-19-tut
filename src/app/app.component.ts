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
  // count: WritableSignal<number | string> = signal(10);
  //computed is read only
  count: Signal<number> = computed(() => 10);

  constructor() {
    effect(() => {
      //console.log(this.data);
      console.log(this.count());
    });
  }

  handleSignal(val: string) {
    if (val == 'inc') {
      //set() and update() is only for writtable signal
      this.count.set(11);
    } else if (val == 'dec') {
      this.count.set(10);
    }
  }

  handleStringSignal(val: string) {
    this.count.set(val);
  }
}
