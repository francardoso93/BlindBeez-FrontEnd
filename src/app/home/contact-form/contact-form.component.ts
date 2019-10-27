import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Contact } from '../../models/contactmessages/contact.model';
// import { Backendpoints } from '../../models/backendpoints/backendpoints.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  // styleUrls: ['./contact.component.css']
})
export class ContactFormComponent implements OnInit {
  // contact: Contact = new Contact();
  address: object = new Object();
  // http: Http;
  formSentToServer: boolean = null;
  pendingRequest = false;
  // endpoints = new Backendpoints();
  SuccessMessage: string = "Enviado com sucesso, aguarde nossa resposta!";

  // constructor(http: Http) {
  //   this.http = http;
  // }

  ngOnInit() {
  }

  onSubmit(event, contactForm) {
    console.log('submited');
  //   this.pendingRequest = true;
  //   document.body.style.cursor = 'wait';
  //   event.preventDefault();

  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   // TODO: Esse endpoint deve ficar no arquivo de config

  //   this.http.post(this.endpoints.contacts, JSON.stringify(this.contact), { headers: headers })
  //     .subscribe(() => {
  //       this.contact = new Contact();
  //       contactForm.reset();
  //       this.formSentToServer = true;
  //       this.pendingRequest = false;
  //       document.body.style.cursor = 'default';
  //       console.log('Contact enviado com sucesso');
  //     }, erro => {
  //       console.log(erro);
  //       this.formSentToServer = false;
  //       this.pendingRequest = false;
  //     });
  }
}
