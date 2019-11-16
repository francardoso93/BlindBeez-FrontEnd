import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  clientScheduleForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  public datemask = [
    /[0-9]/,
    /[0-9]/,
    "/",
    /[0-1]/,
    /[0-9]/,
    "/",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/
  ];

  constructor(public fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showMessage = false;
    this.submitted = false;

    this.clientScheduleForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([
          Validators.required,
          Validators.pattern(/\b\S+@\S+\b/g),
        ])],
      date: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/][0-2][0-9][0-9][0-9]'),
      ])],
    });
  }

  submitForm(value: any) {
    console.log(value);

    this.submitted = true;

    if (this.clientScheduleForm.valid) {
      this.showMessage = true;
      //TODO: Submit real do formulario JSON
      setTimeout(() => {
        const messageHeading = <HTMLElement>document.querySelector('#message-heading');
        messageHeading.focus();
      }, 100);
    } else {
      setTimeout(() => {
        const errorHeading = <HTMLElement>document.querySelector('#error-heading');
        errorHeading.focus();
      }, 100);
    }
  }
}
