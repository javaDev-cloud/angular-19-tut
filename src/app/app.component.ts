import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  task: string = '';
  taskList: { id: number; name: String }[] = [];

  addtask(val: string) {
    if (!this.taskList.find((task) => task.name == val)) {
      this.taskList.push({ id: this.taskList.length + 1, name: this.task });
    } else {
      alert('task already added');
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id);
  }
}
