import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';
import { Routes, RouterModule } from '@angular/router';

export const routes : Routes = [
  { path: '', component: BookDisplayComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
