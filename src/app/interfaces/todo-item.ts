import { TodoItem } from '../interfaces/todo-item';
import { OnInit, Input } from '@angular/core';


export interface TodoItem {
  title: string;
  completed?: boolean;
}
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  ngOnInit() {}

}


