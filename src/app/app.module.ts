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
import { ClubsComponent } from './components/clubs/clubs.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { ParentSpaceComponent } from './components/parent-space/parent-space.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ClubAddService} from './components/club-add.service';
import { ShowClubsComponent } from './components/show-clubs/show-clubs.component';
import { ModifyClubComponent } from './components/modify-club/modify-club.component';

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
    ClubsComponent,
    AddClubComponent,
    ParentSpaceComponent,
    ShowClubsComponent,
    ModifyClubComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    RouterModule,
    ChartsModule ,
    ChartsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ClubAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
