import { EventEmitter, Injectable } from '@angular/core';
import { Tasks } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskSelected = new EventEmitter<Tasks>();

  private tasks: Tasks[] = [
    new Tasks('12881','Gowthaman','Alambadi, Kangeyam'),
    new Tasks('12882','Gowthaman M','Ondipudhur, coimbatore'),
    new Tasks('12883','Gokul','Palladam, Coimbatore'),
    new Tasks('12884','Pranavi','Peelamedu, cbe'),
    new Tasks('12881','Gowthaman','Alambadi, Kangeyam'),
    new Tasks('12882','Gowthaman M','Ondipudhur, coimbatore'),
    new Tasks('12883','Gokul','Palladam, Coimbatore')
  ];

  getTasks() {
    return this.tasks.slice();
  }

}
