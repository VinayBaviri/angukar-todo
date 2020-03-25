import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component'
import { PageNOtFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'tasks', component: TodoComponent },
  { path: "**", component: PageNOtFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TodoComponent,
  WelcomeComponent,
  PageNOtFoundComponent
]
