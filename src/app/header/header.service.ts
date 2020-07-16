import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private buttonsVisible: boolean =  true;

  constructor() { }

  setHeaderButtonsVisibility(visibility: boolean) {
    this.buttonsVisible = visibility;
  }

  getHeaderButtonsVisibility() {
    return this.buttonsVisible;
  }
}
