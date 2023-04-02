import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  todos: any;
  @Input('header') header: string | undefined;

  constructor(private todoService: TodosService) {
    this.myForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern(''),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.myForm.value);
  }
}
