import { EventEmitter, Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {
    const storedArticles = localStorage.getItem('articles');
    if (storedArticles) {
      this.articles = JSON.parse(storedArticles);
    }
   }

   headers=new HttpHeaders({
    'Content-Type':'application/json'
  });

  articles:Article[]=[]

  showArticleFormEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 
  showArticleForm(value:boolean){
    this.showArticleFormEvent.emit(value)
  }

  createArticle(article:Article):Observable<any>{
    console.log("submitted article",article);

   return this.http.post<Article>("http://localhost:8000/api/blog/create", article, {headers:this.headers}).pipe(
      tap(result=>{
        console.log("result",result);
        this.articles.push(article);
       
      })
    )
   
  }

  getArticles():Observable<any>{
    return this.http.get<any>("http://localhost:8000/api/blog/getAll",{headers:this.headers})
  }

}
