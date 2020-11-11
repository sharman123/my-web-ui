import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SurveyService } from '../Survey.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  fname: string; lname: string; saddress: string; city: string; state: string; zip: string; phone: string; email: string; 
  sdate: Date; likeness: String; 

  constructor(private svc: SurveyService, private http: HttpClient) {
    
   }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    console.log("Your email id is: ", data);
 let likereasons = ""

    if(data.students == true){ //concat the likereasonses
      likereasons = likereasons.concat(",students ");
    }
    if(data.location == true){
      likereasons = likereasons.concat(", location");
    }
    if(data.campus == true){
      likereasons = likereasons.concat(", campus");
    }
    if(data.atmosphere == true){
      likereasons = likereasons.concat(", atmosphere");
    }
    if(data.rooms == true){
      likereasons =  likereasons.concat(", Dorm rooms");
    }
    if(data.sports == true){
      likereasons = likereasons.concat(", sports");
    }
    data.likereasons = likereasons.replace(",", "");
   
    let recommendation = ""
    if(data.refer == 1){
      recommendation = "Very Likely";
    }
    else if(data.refer == 2){
      recommendation = "Likely";
    }
    else if(data.refer == 3){
      recommendation = "Unlikely";
    }
   
    data.recommendation=recommendation
 
     console.log("DATA AFTER ADDED likereasons", data);
     const headers = {};
     this.http.post<any>('http://35.236.244.185/HW/webresources/surveys/create/', data, { headers }).subscribe((response) => console.log(response),
     (error) => console.log(error)
     );
     alert("Your Survey Has Been Submitted!!!")
  }
 


}
