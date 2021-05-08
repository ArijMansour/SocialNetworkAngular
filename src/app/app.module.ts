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

import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { NbThemeModule, NbChatModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


import { KinderOwnerSpaceComponent } from './kinder-owner-space/kinder-owner-space.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { HttpClientModule } from '@angular/common/http';


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
    ChatbotComponent,
    KinderOwnerSpaceComponent,
    ManagePostsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    RouterModule,
    ChartsModule ,
    RouterModule ,
    ChartsModule ,
    NbThemeModule.forRoot(),
    NbChatModule ,
    FormsModule ,
    HttpClientModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
