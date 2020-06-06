import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitResultService {
  private header: string;
  private body: string;

  constructor() { }

  setResultSubmitResultText(header: string, body: string) {
    this.header = header;
    this.body = body;
  }

  getHeader(): string {
    return this.header;
  }

  getBody(): string {
    return this.body;
  }
}
