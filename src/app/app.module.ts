import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CiderComponent } from './components/cider/cider.component';
import { CiderListComponent } from './components/cider/cider-list/cider-list.component';
import { CiderDetailsComponent } from './components/cider/cider-details/cider-details.component';
import { CiderCreateComponent } from './components/cider/cider-create/cider-create.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuDetailsComponent } from './components/menu/menu-details/menu-details.component';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';
import { AdminComponent } from './components/admin/admin.component';
import { PublishCommentComponent } from './components/admin/publish-comment/publish-comment.component';
import { AuthService } from './services/auth.service';
import { AdminGuard } from './guards/admin.guard';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SubscribeFormComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CiderComponent,
    CiderListComponent,
    CiderDetailsComponent,
    CiderCreateComponent,
    MenuComponent,
    MenuListComponent,
    MenuDetailsComponent,
    MenuCreateComponent,
    AdminComponent,
    PublishCommentComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    Angular2FontawesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
