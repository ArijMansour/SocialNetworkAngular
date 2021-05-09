import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {


  id! : number ;
  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }

}
