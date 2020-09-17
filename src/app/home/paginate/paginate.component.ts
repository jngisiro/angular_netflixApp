import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss'],
})
export class PaginateComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;

  @Output() paginate = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
