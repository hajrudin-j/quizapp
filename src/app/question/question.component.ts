import { Component, OnInit} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { interval } from 'rxjs';
import { ResultsComponent } from '../results/results.component';
import { QuestionService } from '../service/question.service';
import { WelcomeComponent } from '../welcome/welcome.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  resultsBool: boolean = false;

  public username : string="";
  public questionList : any = [];
  public currentQuestion: number = 0;
  public points : number = 0;
  public lengthJson: number = 0;
  public counter: number = 60; 
  public option: number = 0;
  public correctAnsw: number = 0;
  public incorrectAnsw: number = 0;

  public counterQ:boolean = false;

  interval$ : any;
  questNumber : number = 1997;

  public data: number = 0;
  public diffCounter: number = 60; 

  // progress = (this.currentQuestion/this.questionList.length)*100;

  public progress = 0;

  

  constructor(private questionsService : QuestionService, private router:Router) { }

  

  ngOnInit(): void {
    this.username = localStorage.getItem("username")!; 
    this.getAllQuestions();
    

    this.interval$ = interval(1000)
    .subscribe((d) => {
      this.data = d;
      this.diffCounter = 60 - this.data;

      // this.counter--;
      console.log(this.diffCounter);

      if(this.diffCounter===0){
        
        alert("Time\'s up!");
        // this.router.navigate(['/results']);
        this.resultsBool = true;

        this.stopCounter();
      } 
    })

    // console.log(this.currentQuestion);

  }

  stopCounter(){
    this.interval$.unsubscribe();
    // this.diffCounter = 0;
  }

  done(){
    this.stopCounter();
    this.resultsBool = true;
  }

  
 

  getAllQuestions(){
    this.questionsService.getQuestionJson()
    .subscribe(res =>{ 
      this.questionList = res.questions;
      this.lengthJson = res.questions.length;
      
    })
  }

  

  nextQuestion(){
    this.currentQuestion++;
    this.counterQ = false;
    // if(this.currentQuestion+1 == this.lengthJson){
    //   let textVar : any = document.getElementById('next')?.style.display;
    //   textVar = "none";
    // }
    
  }

  previousQuestion(){
    this.currentQuestion--;
  }

 

  // validationTimer(){
  //   if(this.diffCounter == 50){
  //     this.router.navigate(['/results'])
  //   }

  // }

 

  answer(currentQno: number, option : any ){
     
    if(option.correct){
      this.points+=10;
      
      this.correctAnsw++;
      setTimeout(() => {
        this.currentQuestion++;
      }, 1500);

    }
    else{
      this.points-=20;
      this.incorrectAnsw++;
      setTimeout(() => {
        this.currentQuestion++;
      }, 1500);
    }

     
    if(this.currentQuestion===this.questionList.length-1){
      // this.router.navigate(['/results']);
      
      this.stopCounter();

      setTimeout(() => {
        this.resultsBool = true;
      }, 1500);
    }

  }



}
