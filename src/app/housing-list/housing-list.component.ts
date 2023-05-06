import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { DataService } from '../data.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];

  constructor(private dService: DataService) {
    this.housingLocationList = this.dService.getHousingLocationList();
  }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.housingLocationList.filter(
      (location: HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);

  }

  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();



}
