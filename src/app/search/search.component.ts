import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = '';
  selected = '';
  panelOpenState = false;
  formattedAddress = '';
  INRprice: any;
  EURprice: any;
  samplePrice: number;
  displayPrice: number;
  latitude: any;
  longitude: any;
  hotelsData: any;


  constructor(public dataService: DataService, private _http: HttpClient,private _sanitizer: DomSanitizer) { 
    //console.log(this._dataService.dataServiceHotel)
  }

  ngOnInit() {

    this.samplePrice = 27;
    this.selected = 'USD';
    this.displayPrice = 27;
    this.hotelsData = [];
  };

  // currencyChanged() {
  //   // var currencyData= {};
  //   // console.log(this.selected)
  //   // this.getCurrencyChangedValue("USD",this.selected).subscribe(function(data){
  //   //   currencyData=data;
  //   //   console.log(data)
  //   // })
  //   // console.log(currencyData)
  // }

  // getCurrencyChangedValue(base: String, target: String){
  //   var url="https://free.currencyconverterapi.com/api/v6/convert?q="+base+"_"+target+"&compact=ultra";
  //   console.log(url)
  //   return this._http.get(url);
  // }

  geoLocation(): void {

  }

  getData(lat: string, long: string) {
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=5000&type=hotel&key=AIzaSyCLZENd_kdgMGtEnK1gM8SmM2nuFFoJ04I";
    return this._http.get(url);
  }
  
  public handleAddressChange(address: any) {

    this.formattedAddress = address.formatted_address;
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
  }

  pricing(){
    //onsole.log(this.latitude)
    this.getData(this.latitude, this.longitude).subscribe(data => {
      this.dataService.dataServiceHotel= data;
      console.log(this.dataService.dataServiceHotel)
    })
  }

  getPhoto(photo: string){
    console.log("testing")
    var photoUrl="'url('https://maps.googleapis.com/maps/api/place/photo?max-width=350&photoreference="+photo+"&key=AIzaSyCLZENd_kdgMGtEnK1gM8SmM2nuFFoJ04I')'";
    console.log(photoUrl)
    return photoUrl;
  }
}
