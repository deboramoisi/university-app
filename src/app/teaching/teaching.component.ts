import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  checkIcon = faCheck;
  course: string = ''; 

  constructor() { }

  ngOnInit(): void {
    this.course = 'default';
  }

  scroll(el: HTMLElement, course: string) {
    this.course = course;
    el.scrollIntoView();
  }

}
