import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'locationError',
  templateUrl: './location-error.component.html',
  styleUrls: ['./location-error.component.scss']
})
export class LocationErrorComponent implements OnInit {
  @Input("msg") msg:string="";
  @Input("locationName") locationName:string="";
  @Output() retryEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  retry(){
    this.retryEvent.emit();
  }
}
