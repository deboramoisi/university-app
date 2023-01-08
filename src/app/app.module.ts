import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReusableHeaderComponent } from './components/reusable-header/reusable-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortofolioCardComponent } from './components/portofolio-card/portofolio-card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ResumeComponent } from './resume/resume.component';
import { ResumeTimelineCardComponent } from './components/resume-timeline-card/resume-timeline-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    TeachingComponent,
    ContactComponent,
    HomeComponent,
    ReusableHeaderComponent,
    NavbarComponent,
    PortofolioCardComponent,
    ResumeComponent,
    ResumeTimelineCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
