import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Tasks[] = [
    new Tasks('Gowthaman','Alambadi, Kangeyam'),
    new Tasks('Gowthaman M','Ondipudhur, coimbatore'),
    new Tasks('Gokul','Palladam, Coimbatore'),
    new Tasks('Pranavi','Peelamedu, cbe')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
