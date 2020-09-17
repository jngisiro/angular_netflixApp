import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() images = [];
  @Input() auto: boolean;
  currentSlide = this.images[0];
  currentIndex = 0;
  timer: Subscription;

  constructor() {}

  ngOnInit(): void {
    if (this.auto) {
      this.timer = interval(5000).subscribe(() => {
        this.moveSlide('next');
      });
    }
  }

  moveSlide(direction: string) {
    if (direction === 'prev') {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex -= 1;
      }
    }

    if (direction === 'next') {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    }
  }

  clearInterval() {
    this.timer.unsubscribe();
  }

  ngOnDestroy() {
    this.clearInterval();
  }
}
