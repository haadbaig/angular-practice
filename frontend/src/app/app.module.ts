import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavheaderComponent } from './components/navheader/navheader.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodocardComponent } from './components/todocard/todocard.component';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    LoginformComponent,
    TodocardComponent,
    CreatetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
