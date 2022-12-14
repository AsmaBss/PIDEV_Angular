import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from '../app/Components/footer/footer.component';
import { LatestmediaComponent } from '../app/Components/latestmedia/latestmedia.component';
import { TopreviewsComponent } from '../app/Components/topreviews/topreviews.component';
import { TeamComponent } from '../app/Components/team/team.component';
import { PartnershipComponent } from '../app/Components/partnership/partnership.component';
import { ServicesComponent } from '../app/Components/services/services.component';
import { OurproudComponent } from '../app/Components/ourproud/ourproud.component';
import { OurfaqComponent } from '../app/Components/ourfaq/ourfaq.component';
import { HeaderComponent } from '../app/Components/header/header.component';
import { OurworkComponent } from '../app/Components/ourwork/ourwork.component';
import { HomesliderComponent } from '../app/Components/homeslider/homeslider.component';
import { EvenementsComponent } from '../app/Components/Evenements/evenements/evenements.component';
import { AddevenementComponent } from '../app/Components/Evenements/addevenement/addevenement.component';
import { UpdateevenementComponent } from '../app/Components/Evenements/updateevenement/updateevenement.component';
import { HeadComponent } from '../app/Components/head/head.component';
import { ScriptsComponent } from '../app/Components/scripts/scripts.component';
import { WorkinprogressComponent } from '../app/Components/workinprogress/workinprogress.component';
import { ContactusComponent } from '../app/Components/contactus/contactus.component';
import { LatestupdatesComponent } from '../app/Components/latestupdates/latestupdates.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PagenotfoundComponent } from '../app/Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../app/Components/home/home.component';
import { AddeventsliderComponent } from '../app/Components/Evenements/addeventslider/addeventslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { EvenementdetailsComponent } from '../app/Components/Evenements/evenementdetails/evenementdetails.component';
import { EvenementssliderComponent } from './Components/Evenements/evenementsslider/evenementsslider.component';
import { JoinedeventsComponent } from './Components/Evenements/joinedevents/joinedevents.component';
import { LikedeventsComponent } from './Components/Evenements//likedevents/likedevents.component';
import { JoinedeventssliderComponent } from './Components/Evenements/joinedeventsslider/joinedeventsslider.component';
import { LikedeventssliderComponent } from './Components/Evenements/likedeventsslider/likedeventsslider.component';
import { AddEventComponent } from './BackEnd/Events/add-event/add-event.component';
import { DeleteeventlistComponent } from './BackEnd/Events/deleteeventlist/deleteeventlist.component';
import { UpdateeventComponent } from './BackEnd/Events/updateevent/updateevent.component';
import { UpdateeventlistComponent } from './BackEnd/Events/updateeventlist/updateeventlist.component';
import { LandingComponent } from './BackEnd/landing/landing.component';
import { ManagementComponent } from './BackEnd/management/management.component';
import { NavComponent } from './BackEnd/nav/nav.component';
import { StatistiquesComponent } from './BackEnd/statistiques/statistiques.component';
import { StatsGlobalComponent } from './BackEnd/stats-global/stats-global.component';
import { DashboardcssComponent } from './BackEnd/dashboardcss/dashboardcss.component';
import { DashboardfooterComponent } from './BackEnd/dashboardfooter/dashboardfooter.component';
import { AddOfferComponent } from './Components/offer/add-offer/add-offer.component';
import { DeleteOfferComponent } from './Components/offer/delete-offer/delete-offer.component';
import { ListOffersComponent } from './Components/offer/list-offers/list-offers.component';
import { MyOffersComponent } from './Components/offer/my-offers/my-offers.component';
import { ShowOfferComponent } from './Components/offer/show-offer/show-offer.component';
import { UpdateOfferComponent } from './Components/offer/update-offer/update-offer.component';
import { AddReclamationComponent } from './Components/reclamation/add-reclamation/add-reclamation.component';
import { DeleteReclamationComponent } from './Components/reclamation/delete-reclamation/delete-reclamation.component';
import { ListReclamationsByUserComponent } from './Components/reclamation/list-reclamations-by-user/list-reclamations-by-user.component';
import { ListReclamationsComponent } from './Components/reclamation/list-reclamations/list-reclamations.component';
import { ShowReclamationComponent } from './Components/reclamation/show-reclamation/show-reclamation.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LatestmediaComponent,
    TopreviewsComponent,
    TeamComponent,
    PartnershipComponent,
    ServicesComponent,
    OurproudComponent,
    OurfaqComponent,
    HeaderComponent,
    OurworkComponent,
    HomesliderComponent,
    EvenementsComponent,
    AddevenementComponent,
    UpdateevenementComponent,
    HeadComponent,
    ScriptsComponent,
    WorkinprogressComponent,
    ContactusComponent,
    LatestupdatesComponent,
    PagenotfoundComponent,
    AddeventsliderComponent,
    EvenementdetailsComponent,
    EvenementssliderComponent,
    JoinedeventsComponent,
    LikedeventsComponent,
    JoinedeventssliderComponent,
    LikedeventssliderComponent,
    HomeComponent,
    NavComponent,
    ManagementComponent,
    StatistiquesComponent,
    StatsGlobalComponent,
    FooterComponent,
    AddEventComponent,
    PagenotfoundComponent,
    UpdateeventComponent,
    UpdateeventlistComponent,
    DeleteeventlistComponent,
    LandingComponent,
    DashboardcssComponent,
    DashboardfooterComponent ,
    ListOffersComponent,
    AddOfferComponent,
    DeleteOfferComponent,
    UpdateOfferComponent,
    ShowOfferComponent,
    AddReclamationComponent,
    DeleteReclamationComponent,
    ListReclamationsComponent,
    ShowReclamationComponent,
    ListReclamationsByUserComponent,
    MyOffersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    CarouselModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
      path:'',
        component:HomeComponent
      },{
      path:'Home',
      component:HomeComponent, data: { animation: 'isLeft' } 
      },
      {
        path:'AddEvent',
          component:AddevenementComponent, data: { animation: 'isRight' } 
        }
        ,
        {
          path:'404NotFound',
            component:PagenotfoundComponent
          },
          
      {
        path:'Evenements',
          component:EvenementsComponent, data: { animation: 'isRight' } 
        },
        {
          path:'EventDetails/:id',
            component:EvenementdetailsComponent, data: { animation: 'isRight' } 
          },
        {
          path:'JoinedEvents',
            component:JoinedeventsComponent, data: { animation: 'isRight' } 
          },
        {
          path:'LikedEvents',
            component:LikedeventsComponent, data: { animation: 'isRight' } 
          },
        {path: '**', redirectTo: '404NotFound'}
    ]),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
