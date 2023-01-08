import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-header',
  templateUrl: './reusable-header.component.html',
  styleUrls: ['./reusable-header.component.css']
})
export class ReusableHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
