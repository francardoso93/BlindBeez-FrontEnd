import { Component, OnInit } from '@angular/core';
import { SubmitResultService } from './submit-result.service';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {
  header: string;
  body: string;

  constructor(private submitResultService: SubmitResultService) {
    this.header = submitResultService.getHeader();
    this.body = submitResultService.getBody();
  }

  ngOnInit() {
  }

}
