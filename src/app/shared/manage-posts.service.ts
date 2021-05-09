import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/core/model/Post';
import { PostFetch } from 'src/core/model/postFetch';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {

  headers = new HttpHeaders().set('content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }


  url:string = "http://localhost:8083/SpringMVC/servlet/get-all-Posts";
  urldelete: string = "http://localhost:8083/SpringMVC/servlet/deletePost/";
  urlupdate: string = "http://localhost:8083/SpringMVC/servlet/updatePost";
  urlgetById: string = "http://localhost:8083/SpringMVC/servlet/retrieve-Post";

  constructor(private _http:HttpClient) { }


  getPosts(){
    return this._http.get<Post[]>(this.url);
  }

  deletePost(id : number): Observable<Post>{
    const urldelete = `${this.urldelete}/${id}`;
    return this._http.delete<Post>(urldelete, this.httpOptions);
  }
  getUpdatePost(id : number): Observable<Post>{
    const urlgetById = `${this.urlgetById}/${id}`;
    return this._http.get<Post>(urlgetById, this.httpOptions);
  }
  UpdatePost(post : PostFetch): Observable<Post>{
    const urlupdate = `${this.urlupdate}/${post.id}`;
    return this._http.put<Post>(urlupdate, this.httpOptions).pipe(
      map(() => post)
    );
  }

  public addPosts(post:Post){
    return this._http.post<Post>("http://localhost:8083/SpringMVC/servlet/addPost" , post);
  }
  
 

  
}
