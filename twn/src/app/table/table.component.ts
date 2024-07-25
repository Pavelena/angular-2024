import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleType } from '../models/article';
import { LoaderComponent } from '../loader/loader.component';
import { BirthdayPipe } from '../pipes/birthday.pipe';
import { SexFullPipe } from '../pipes/sex-full.pipe';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { SpaceToPhonePipe } from '../pipes/space-to-phone.pipe';
import { StringToHtmlPipe } from '../pipes/string-to-html.pipe';
import { ArticleService } from '../service/article.service';
import { SlicePaginationPipe } from '../pipes/slice-pagination.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule, 
    LoaderComponent, 
    BirthdayPipe,
    SexFullPipe,
    SpaceToPhonePipe,
    StringToHtmlPipe,
    RouterLink,
    ShortenerPipe,
    SlicePipe,
    SlicePaginationPipe
  ],
  providers: [BirthdayPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  list!: any[];
  originalList!: any[];
  isLoaded = false;
  sortProperty!:string;
  direction = 1;
  //pagination
  pages: number[] = [];
  activePage = 1;
  pageSize = 10;
  
  
  ngOnInit(): void {
    this.articleService.urlRequest().subscribe(vastus => {
      this.list = vastus.list.slice(); 
      this.originalList = vastus.list.slice();

      this.isLoaded = true;
      
      const pagesCount = Math.ceil(this.list.length / this.pageSize); //Ymmardus ylespoole
      for (let index = 1; index <= pagesCount; index++) {
        this.pages.push(index);
      }
    });
  }

  changePage(page:number) {
    this.activePage = page;
  }

  sort(property:string) {
    //this.direction = property === this.sortProperty ? (this.direction * -1) : 1;
    if(property === this.sortProperty) {
      
      switch (this.direction) {
        case -1:
          this.direction = 0;
          break;
        case 0:
          this.direction = 1;
          break;
        case 1:
          this.direction = -1;
          break;
      }
    } else {
      this.direction = 1;
    }
    this.sortProperty = property;
    
    if (this.direction === 1) {
      
      if (property === "personal_code") {
        this.list.sort((a, b) => this.birthdayPipe.date(a[property]) - this.birthdayPipe.date(b[property]));
      } else {
        this.list.sort((a, b) => a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0);
      }
      // this.list.sort((a, b) => {
      //   if(a[property]===undefined || b[property]===undefined) {
      //     return 0;
      //   }
      //   if (property === "personal_code") {
      //     return this.birthdayPipe.date(a[property]) - this.birthdayPipe.date(b[property]);
      //   }
      //   return a[property].localeCompare(b[property],"et");
      // });
      //this.direction = -1;

    } else if (this.direction === -1) {
      if (property === "personal_code") {
        this.list.sort((a, b) => this.birthdayPipe.date(b[property]) - this.birthdayPipe.date(a[property]));
      } else {
        this.list.sort((a, b) => a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0);
      }
      // this.list.sort((a, b) => {
      //   if(a[property]===undefined || b[property]===undefined) {
      //     return 0;
      //   }
      //   if (property === "personal_code") {
      //     return this.birthdayPipe.date(b[property]) - this.birthdayPipe.date(a[property]);
      //   }
      //   return b[property].localeCompare(a[property],"et")
      // });
      //this.direction = 0;
    }  else if (this.direction === 0){
      this.list = this.originalList.slice();
      //this.direction = 1;
    }
  }
  sortIcon(property: string) {
    if (this.sortProperty === property) {
      switch (this.direction) {
        case -1:
          return 'fa-sort-up';
        case 0:
            return 'fa-sort';
        case 1:
          return 'fa-sort-down';
      }
    }
    return 'fa-sort';
  }

  constructor(
    private articleService: ArticleService,
    private birthdayPipe: BirthdayPipe
  ){}

}
