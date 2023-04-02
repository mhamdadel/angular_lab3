import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
    export class TodosComponent implements OnInit {
      todos: any[] = [];
    
      constructor(private todosService: TodosService) {}
    
      ngOnInit(): void {
        this.todosService.get().subscribe((data) => {
          this.todos = data;
        });
      }
    }
  

