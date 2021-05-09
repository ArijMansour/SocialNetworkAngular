import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/more/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {RouterModule,ROUTES} from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { KinderOwnerSpaceComponent } from './kinder-owner-space/kinder-owner-space.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter' ;
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ManagePostsService } from './shared/manage-posts.service';
import { GoodComponent } from './good/good.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    StatsComponent,
    ChartsComponent,
    KinderOwnerSpaceComponent,
    ManagePostsComponent,
    GoodComponent,
    UpdatePostComponent,
    AddPostComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    RouterModule,
    ChartsModule ,
    RouterModule ,
    HttpClientModule,
    ChartsModule,
    Ng2SearchPipeModule, 
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
    

    

  ],
  providers: [ManagePostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
