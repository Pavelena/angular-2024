import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StringToHtmlPipe } from '../pipes/string-to-html.pipe';
import { ArticleService } from '../service/article.service';
import { ArticleType } from '../models/article';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    StringToHtmlPipe, 
    CommonModule, 
    LoaderComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  articles!: any[];
  article!: ArticleType;
  isLoaded = false;

  ngOnInit(): void {
    let articleUrl = this.route.snapshot.params["id"];

    if (articleUrl === undefined){
      articleUrl = "972d2b8a";
      this.article = articleUrl;
    }

    this.articleService.urlRequest().subscribe(vastus => {
      this.articles = vastus.list;
      const articleMatch = this.articles.find(a => a.id === articleUrl);

      if (articleMatch !== undefined){
        this.article = articleMatch; 
        this.isLoaded = true;
      }
    });
  }

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ){}
}
