import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/more/about.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ChartsComponent } from './components/charts/charts.component';
import { KinderOwnerSpaceComponent } from './kinder-owner-space/kinder-owner-space.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { GoodComponent } from './good/good.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [{path:'',component:HomeComponent} ,
{path:'kindergardens',component:PortfolioComponent} ,
{path:'more',component:AboutComponent} ,
{path:'stats',component:StatsComponent } ,
{path:'blog',component:BlogComponent} ,
{path:'contactUs',component:ContactComponent} ,
{path:'sign-in',component:LoginComponent} ,
{path:'kindergartenOwner' , component: KinderOwnerSpaceComponent , children:[
  {path:'managePosts' , component : ManagePostsComponent},
  
   
]},
{path:'update/:id' , component : UpdatePostComponent},
{path:'addPost' , component : AddPostComponent},
{path:'good/:id', component: GoodComponent},
{path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
