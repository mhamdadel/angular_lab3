import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NabvarComponent,
    TodosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
