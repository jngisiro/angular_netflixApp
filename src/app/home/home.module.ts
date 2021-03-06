import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PaginateComponent } from './paginate/paginate.component';
import { GridComponent } from './grid/grid.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainContentComponent,
    SlideshowComponent,
    PaginateComponent,
    GridComponent,
    RatingComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
