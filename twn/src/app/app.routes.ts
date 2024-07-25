import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    { path: '', redirectTo: '/article', pathMatch: 'full'},
    { path: "article", component: ArticleComponent},
    { path: "article/:id", component: ArticleComponent},
    { path: "table", component: TableComponent}
];
