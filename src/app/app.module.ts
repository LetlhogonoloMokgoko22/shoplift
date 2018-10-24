import { FirebaseProvider } from './../providers/firebase/firebase';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from '@angular/http';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from'angularfire2';

  
var Firebaseconfig = {

    apiKey: "AIzaSyCrxxk2dXbuZR6nn2t5AiZZa8LoDKn_I3I",
    authDomain: "myshoplist-79b8a.firebaseapp.com",
    databaseURL: "https://myshoplist-79b8a.firebaseio.com",
    projectId: "myshoplist-79b8a",
    storageBucket: "myshoplist-79b8a.appspot.com",
    messagingSenderId: "332300177054"
  };






@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(Firebaseconfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
