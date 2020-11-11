import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  postSurvey() {
    const headers = { 'Authorization': 'Bearer my-token', 'post':'Access-Control-Allow-Origin'};
    const body = { title: 'Angular POST Request Example' };
    this.http.post<any>('http://35.236.244.185/HW/webresources/surveys//create/', body, { headers }).subscribe(data => {
      console.log("data", data)
    });
    return this.http.post('http://35.236.244.185/HW/webresources/surveys/create/')
  }
 

  //
}

