import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Task[] = [

  ];

  addTask() {
    const newTask: Task = { name: ' ', completed: false };
    this.tasks.push(newTask);
  }
}