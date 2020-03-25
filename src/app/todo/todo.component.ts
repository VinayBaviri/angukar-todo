import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.class';
import { of } from 'rxjs';
import { TodoService } from './todoList.service'
import { map, tap, filter, defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  lTodos: Todo[] = [];
  name: string = ''; device: any
  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.lTodos = this.todoService.getList()
    this.todoService.getDEvices()
      .subscribe(data => this.device = data)

  }

  saveTask() {
    of(this.name).pipe(
      filter(taskStr => taskStr != ''),
      map((task => {
        let taskObj: Todo = {
          id: Math.random(),
          name: task,
        }
        return taskObj
      })),
      map((taskObj: Todo) => {
        this.lTodos.push(taskObj)
        this.name = ""
        this.todoService.saveList(this.lTodos)
      }),
      defaultIfEmpty()
    ).subscribe()
  }

  deleteTask(id: number) {
    of(id).pipe(
      map((id) => {
        this.lTodos.forEach((task, i) => {
          if (task.id === id) {
            this.lTodos.splice(i, 1)
          }
          this.todoService.saveList(this.lTodos)
        })
      })
    ).subscribe()
  }

}
