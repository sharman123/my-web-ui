import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { SurveyService } from '../Survey.service';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.css']
})
export class AllFormsComponent implements OnInit {
  resultData: any
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let obs = this.http.get('http://35.236.244.185/HW/webresources/surveys/');
    obs.subscribe((data) => {
      this.resultData = Object.assign([], data);

    });

  }

}