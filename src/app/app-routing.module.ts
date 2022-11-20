import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {  path: 'contact', component: ContactComponent },  
  {  path: 'todo', component: TodoComponent },
  {  path: 'private', component: PrivateComponent },
  { path: ' ', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
