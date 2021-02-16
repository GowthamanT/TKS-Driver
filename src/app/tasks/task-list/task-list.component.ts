import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Tasks[] = [
    new Tasks('12881','Gowthaman','Alambadi, Kangeyam'),
    new Tasks('12882','Gowthaman M','Ondipudhur, coimbatore'),
    new Tasks('12883','Gokul','Palladam, Coimbatore'),
    new Tasks('12884','Pranavi','Peelamedu, cbe'),
    new Tasks('12881','Gowthaman','Alambadi, Kangeyam'),
    new Tasks('12882','Gowthaman M','Ondipudhur, coimbatore'),
    new Tasks('12883','Gokul','Palladam, Coimbatore')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
