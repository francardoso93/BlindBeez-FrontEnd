import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
})
export class AlertComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Output() confirmationPressed: EventEmitter<void> = new EventEmitter();;

  constructor() {}

  ngOnInit() {}

  onConfirmationPressed() {
    this.confirmationPressed.emit();
  }
}
