import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/core/model/Post';
import { PostFetch } from 'src/core/model/postFetch';
import { ManagePostsService } from '../shared/manage-posts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post : Post = new PostFetch();
  val : any ;
  posts : Post[] = [] ;
  
  constructor(private servicePost: ManagePostsService, private _http: HttpClient , private _router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id: " + this.val);
    this.servicePost.getUpdatePost(this.val).subscribe(data => {
      this.post = data ;
    })
  }

update(){
  this.servicePost.UpdatePost(this.post).subscribe(data => {
  });
  this._router.navigate(['kindergartenOwner/managePosts']);
}















}
