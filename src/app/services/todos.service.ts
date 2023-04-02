//   // todos = [
//   //   { title: 'Hello from first todo', status: 'todo' },
//   //   { title: 'Hello from second todo', status: 'finished' },
//   //   { title: 'Hello from third todo', status: 'todo' },
//   // ];

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      retry(3), // retry up to 3 times if there's an error
      catchError((error: any) => {
        console.error(error);
        return throwError('Something went wrong!');
      }),
      tap((data: Todo[]) => {
        this.todos = data;
      })
    );
  }
}