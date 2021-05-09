import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/core/model/Post';
import { PostFetch } from 'src/core/model/postFetch';
import { ManagePostsService } from '../shared/manage-posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post : Post = new PostFetch();
  posts : Post[] = [] ;
 
  constructor(private servicePost: ManagePostsService, private _http: HttpClient , private _router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
  }



  addPosts(){
    this.servicePost.addPosts(this.post).subscribe(() => {
      this._router.navigate(['kindergartenOwner/managePosts']);
    })
  }
  

}
