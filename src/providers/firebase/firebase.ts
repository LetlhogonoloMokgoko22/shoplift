import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireDatabaseModule,FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database'
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
 
  [x: string]: any;
  constructor(public afd: AngularFireDatabase) { }
 
  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }
  updateItem(item){
    this.afd.list('/shoppingItem/').update(item.key,item);
  }
}