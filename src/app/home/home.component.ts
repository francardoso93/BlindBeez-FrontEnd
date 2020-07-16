import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly headerService: HeaderService) { 
    headerService.setHeaderButtonsVisibility(true);
  }

  ngOnInit() {
  }

}
