import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { HotelsDisplayComponent } from './hotels-display/hotels-display.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule }    from '@angular/common/http';
import { DataService } from './data.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,MatIconModule,
    MatSelectModule,MatCardModule,
    MatExpansionModule,
    GooglePlaceModule, BrowserModule, FormsModule,HttpClientModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatInputModule,MatIconModule,MatSelectModule,MatCardModule,MatExpansionModule,HttpClientModule],

  declarations: [
    AppComponent,
    SearchComponent,
    HotelsDisplayComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 

