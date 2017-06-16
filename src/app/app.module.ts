import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

export const firebaseConfig = {
  apiKey: "AIzaSyCBs13eme_yjUbzzbZuo5P1Hp6NSt4rxIs",
  authDomain: "todofirebase-e0d67.firebaseapp.com",
  databaseURL: "https://todofirebase-e0d67.firebaseio.com",
  projectId: "todofirebase-e0d67",
  storageBucket: "todofirebase-e0d67.appspot.com",
  messagingSenderId: "675457768171"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


