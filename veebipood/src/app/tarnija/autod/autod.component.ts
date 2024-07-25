import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Auto } from './auto';
import { AutodService } from './autod.service';
import { PageCenterPipe } from './page-center.pipe';

@Component({
  selector: 'app-autod',
  standalone: true,
  imports: [
    SlicePipe, 
    PageCenterPipe,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css'
})
export class AutodComponent {
  autod: Auto[] = [];
  pages: number[] = [];
  activePage = 1;
  pageSize = 5;
  isLoading = true;

  constructor(
  private autodService: AutodService
  ){}

 ngOnInit(): void {
  this.autodService.saaAutod().subscribe(vastus => {
      this.autod = vastus.results;
      const pagesCount = Math.ceil(vastus.results.length/this.pageSize); //Ymmardus ylespoole
      for (let index = 1; index <= pagesCount; index++) {
        this.pages.push(index);
      }
      this.isLoading = false;
    }
  )
 }
 changePage(page:number) {
  this.activePage = page;
 }
}
