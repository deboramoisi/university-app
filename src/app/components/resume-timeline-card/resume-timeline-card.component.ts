import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-timeline-card',
  templateUrl: './resume-timeline-card.component.html',
  styleUrls: ['./resume-timeline-card.component.css']
})
export class ResumeTimelineCardComponent implements OnInit {
  @Input() position: string = 'right';
  @Input() title: string = '';
  @Input() profile: string = '';
  @Input() organization: string = '';
  @Input() postedDate: string = '';

  startDate: string = '';
  endDate: string = '';

  constructor() { }

  ngOnInit(): void {
    this.startDate = this.postedDate.slice(0, 4);
    this.endDate = this.postedDate.slice(5);
  }

}
