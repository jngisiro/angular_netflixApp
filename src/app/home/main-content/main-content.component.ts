import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  images = [
    {
      url:
        'https://images.unsplash.com/photo-1600201319330-e99245e614c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      rating: 4.5,
    },
    {
      url:
        'https://images.unsplash.com/photo-1600184831467-29f64598f37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      rating: 4.3,
    },
    {
      url:
        'https://images.unsplash.com/photo-1600230710522-a9f4aff55494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      rating: 4.8,
    },
    {
      url:
        'https://images.unsplash.com/photo-1600297485496-4d5f07d8adb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80',
      rrating: 4.7,
    },
    {
      url:
        'https://images.unsplash.com/photo-1600228865437-ee8902a9a8f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      rating: 4.0,
    },
    {
      url:
        'https://images.unsplash.com/photo-1600187292422-693e4296686a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80',
      rating: 5.0,
    },
  ];

  currentPage = 1;

  constructor() {}

  ngOnInit(): void {}

  paginate(direction: string) {
    if (direction === 'prev' && this.currentPage >= 1) {
      --this.currentPage;
    } else {
      ++this.currentPage;
    }
  }
}
