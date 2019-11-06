import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.showMessage = false;
    this.submitted = false;

    this.contactForm = this.fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([
          Validators.required,
          Validators.pattern(/\b\S+@\S+\b/g),
        ])],
      // 'phoneNumber': [null, Validators.compose([
      //   Validators.required,
      //   Validators.pattern(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g),
      //   Validators.minLength(7)
      // ])],
      'subject': [null, Validators.required],
      'message': [null, Validators.required]
    });
  }

  submitForm(value: any) {
    console.log(value);

    this.submitted = true;

    if (this.contactForm.valid) {
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
