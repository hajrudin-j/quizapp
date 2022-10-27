import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  
  getQuestionJson(){
    return this.http.get<any>("../assets/questions.json");
    
  }

  // numberOfQuestions(){
  //   const yourJson = require('../assets/questions.json');
  //   const questlength = Object.keys(yourJson).length;
  // }

 
}
  