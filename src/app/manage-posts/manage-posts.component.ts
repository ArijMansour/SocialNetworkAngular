import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../shared/manage-posts.service';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/core/model/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {

  posts : Post[] = [];
  Title! : any ;
  p: number =1 ;
  constructor(private servicePost: ManagePostsService, private _http: HttpClient , private _router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.servicePost.getPosts().subscribe((response) => {
      this.posts = response ;
    })

  }

  Search(){
    if (this.Title == ""){
      this.ngOnInit();
    }
    else {
      this.posts = this.posts.filter(res =>{
        return res.Title.toLocaleLowerCase().match(this.Title.toLocaleLowerCase());
      })
    }
  }
  
  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  deleteRow(val: number) {
    if (confirm("Are you sure to delete? ")) {
      this.servicePost.deletePost(val).subscribe(() =>
        this.servicePost.getPosts().subscribe(res => {
          this.posts = res
        })
      );
    }
  }

  
  update(id : number){
    this._router.navigate(['/update' , id]) ;
}

addPost(id : number){
  this._router.navigate(['/addPost']);
}










}
