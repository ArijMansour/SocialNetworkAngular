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
import {RouterModule,ROUTES} from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { NbThemeModule, NbChatModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminkindergartenComponent } from './components/adminkindergarten/adminkindergarten.component';



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
    NotfoundComponent,
    StatsComponent,
    ChartsComponent,
    ChatbotComponent,
    AdminkindergartenComponent
    
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
    ChartsModule,
    BrowserAnimationsModule ,
    MatToolbarModule ,
    MatSidenavModule ,
    MatButtonModule ,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule ,
    MatSnackBarModule ,
    MatDialogModule ,
    MatProgressSpinnerModule ,
    MatTableModule ,
    MatCardModule ,
    MatFormFieldModule ,
    MatProgressSpinnerModule ,
    MatInputModule  ,
    MatPaginatorModule ,
    MatDatepickerModule ,
    MatSelectModule,
    LayoutModule,
    MatListModule,
    OverlayModule ,
    CdkTreeModule ,
    PortalModule ,
    MatAutocompleteModule ,
    MatButtonToggleModule ,
    MatCheckboxModule ,
    MatChipsModule ,
    MatExpansionModule ,
    MatRippleModule ,
    MatMenuModule ,
    MatSortModule  ,
    MatTreeModule  ,
    MatBadgeModule ,
    MatGridListModule ,
    MatRadioModule ,
    MatTooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
