import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  constructor() {}

  ngOnInit(): void {}

  renderStars() {
    if (this.rating <= 5) {
      return Math.floor(this.rating);
    } else {
      return Math.floor(this.rating * 2);
    }
  }
}
