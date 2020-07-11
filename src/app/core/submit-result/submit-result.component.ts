import { Component, OnInit } from '@angular/core';
import { SubmitResultService } from './submit-result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {
  header: string = 'Ops! Página incorreta';
  body: string = 'Não temos resultado de nenhuma operação solicitada para mostrar aqui';

  constructor(
    private router: Router,
    submitResultService: SubmitResultService,
  ) {
    this.header = submitResultService.getHeader();
    this.body = submitResultService.getBody();
  }

  ngOnInit() {
    if (!this.header || !this.body) {
      this.router.navigate(['/']);
    }
  }

}
