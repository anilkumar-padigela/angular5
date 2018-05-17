import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './leftbody/banner/banner.component';
import { EnquiryformComponent } from './rightbody/enquiryform/enquiryform.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './routes/home/home.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';

import { OffersComponent } from './routes/offers/offers.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourseService } from './course.service';
import { ReviewService } from './review.service';
import { EnquiryService } from './enquiry.service';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';


import { ReviewsComponent } from './routes/reviews/reviews.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { OffercodePipe } from './offercode.pipe';
import { FiltercoursePipe } from './filtercourse.pipe';
const routes = [
    {path: '', component: HomeComponent},
    {path: 'offices', component: OfficesComponent},
    {path: 'newcourses', component: NewcoursesComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'vclass', component: VirtualclassComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    RoutesComponent,
    HomeComponent,
    NewcoursesComponent,
    OffersComponent,
    OfficesComponent,
    VirtualclassComponent,
    CourselistComponent,
    CourseComponent,

    ReviewsComponent,
    ReviewComponent,
    ReviewlistComponent,
    OffercodePipe,
    FiltercoursePipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [CourseService, ReviewService, EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
