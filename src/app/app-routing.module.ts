import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TodoDetailsComponent} from "./todo-details/todo-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'todo', component: TodoListComponent},
  {path: 'todo/:id', component: TodoDetailsComponent},
  {path: '**', component: PageNotFoundComponent, title: 'Not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
