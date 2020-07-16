import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitResultService {
  private header: string;
  private body: string;
  private buttonLabel: string;
  private buttonLink: string;

  constructor() { }

  setResultSubmitResultText(header: string, body: string) {
    this.header = header;
    this.body = body;
  }

  setResultOkButton(buttonLabel: string, buttonLink: string) {
    this.buttonLabel = buttonLabel;
    this.buttonLink = buttonLink;
  }

  getHeader(): string {
    return this.header;
  }

  getBody(): string {
    return this.body;
  }

  getButtonLabel(): string {
    return this.buttonLabel;
  }

  getButtonLink(): string {
    return this.buttonLink;
  }
}
