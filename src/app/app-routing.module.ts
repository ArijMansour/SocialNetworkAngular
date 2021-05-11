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
import {ClubsComponent} from './components/clubs/clubs.component';
import {AddClubComponent} from './components/add-club/add-club.component';
import {ParentSpaceComponent} from './components/parent-space/parent-space.component';
import {ShowClubsComponent} from './components/show-clubs/show-clubs.component';
import {ModifyClubComponent} from './components/modify-club/modify-club.component';

import { ChatbotComponent } from './components/chatbot/chatbot.component';

import { KinderOwnerSpaceComponent } from './kinder-owner-space/kinder-owner-space.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';


const routes: Routes = [{path:'',component:HomeComponent} ,
{path:'kindergardens',component:PortfolioComponent} ,
{path:'more',component:AboutComponent, children:[{path:'clubs',component:ClubsComponent}]} ,
{path:'stats',component:StatsComponent } ,
{path:'blog',component:BlogComponent} ,
{path:'contactUs',component:ContactComponent , children:[
  { path:'chatbot' , component:ChatbotComponent

}] } ,
{path:'sign-in',component:LoginComponent} ,
{path:'kindergartenOwner' , component: KinderOwnerSpaceComponent , children:[
  {path:'managePosts' , component: ManagePostsComponent},   
]},
  
   {path:'parent_space',component:ParentSpaceComponent,
    children:[
      {path:'show_clubs',component:ShowClubsComponent,
          children:[
            {path:'add-club',component:AddClubComponent},
            {path:'modify_club',component:ModifyClubComponent}
          ]
      }
      ]
  },
{path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
