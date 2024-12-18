import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AddTodoFormComponent } from './todo-list/add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo-list/todo/todo.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import localePl from '@angular/common/locales/pl'
import {registerLocaleData} from "@angular/common";
import { FirstLetterUppercasePipe } from './shared/pipes/first-letter-uppercase.pipe';
import {FormsModule} from "@angular/forms";
import { FirstLetterDirective } from './shared/validators/first-letter.directive';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import {provideHttpClient} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    AlertComponent,
    AddTodoFormComponent,
    TodoComponent,
    ModalComponent,
    FirstLetterUppercasePipe,
    FirstLetterDirective,
    HomeComponent,
    PageNotFoundComponent,
    TodoDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({})
    ],
  providers: [provideHttpClient(),
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
