import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'locationUpdating',
  templateUrl: './location-updating.component.html',
  styleUrls: ['./location-updating.component.scss']
})
export class LocationUpdatingComponent implements OnInit {
  @Input("locationName") locationName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
