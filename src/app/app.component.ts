import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = '';

  //handling 2 way bindings without ngModel
  // handleInputEvent(e: Event) {
  //   this.name = (e.target as HTMLInputElement).value;
  // }
}
