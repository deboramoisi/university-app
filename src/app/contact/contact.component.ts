import { Component, OnInit } from '@angular/core';
import { faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mapMarker = faMapMarker;
  mobile = faMobile;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}