import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() images: { url: string; rating: number };

  constructor() {}

  ngOnInit(): void {
    console.log(this.images);
  }
}
