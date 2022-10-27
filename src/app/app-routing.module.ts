import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: '', redirectTo: 'welcome', pathMatch:"full"},
  {path: "welcome", component:WelcomeComponent},
  {path: "question", component: QuestionComponent},
  {path: "results", component: ResultsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
