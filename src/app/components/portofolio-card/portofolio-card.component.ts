import { Component, Input, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portofolio-card',
  templateUrl: './portofolio-card.component.html',
  styleUrls: ['./portofolio-card.component.css']
})
export class PortofolioCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  @Input() image_alt: string = 'no image';

  infoIcon = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
