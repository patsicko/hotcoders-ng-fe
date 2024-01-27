import { EventEmitter, Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  articles:Article[]=[]

  showArticleFormEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 
  showArticleForm(value:boolean){
    this.showArticleFormEvent.emit(value)
  }

  createArticle(article:Article){
    this.articles.push(article);
    console.log(this.articles);
    localStorage.setItem("articles",JSON.stringify(this.articles))
  }

  getArticles(){
    return this.articles;
  }

}
