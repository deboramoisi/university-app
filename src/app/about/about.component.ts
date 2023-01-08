import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  paperPlaneIcon = faPaperPlane;
  downloadIcon = faDownload;
  checkIcon = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
