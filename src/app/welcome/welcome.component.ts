import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, Validators, FormsModule} from '@angular/forms';
import { Router, RouterLink, Routes } from '@angular/router';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('username') nameKey!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startQuiz(){

    localStorage.setItem("username", this.nameKey.nativeElement.value);

    let fieldInput: string = this.nameKey.nativeElement.value;

    let myVar = document.getElementById("thinkTank");
    let myVar2 = document.getElementById("errorMsg");

    if(fieldInput== "" && myVar != null && myVar2 != null){
      
        myVar.style.border = 'red solid 1px'; 
        myVar2.style.display = 'block';
        
    }
    else {
      this.router.navigate(['/question']);
    }

  }







  

}
