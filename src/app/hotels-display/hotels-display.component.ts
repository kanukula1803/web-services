import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hotels-display',
  templateUrl: './hotels-display.component.html',
  styleUrls: ['./hotels-display.component.css']
})
export class HotelsDisplayComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
