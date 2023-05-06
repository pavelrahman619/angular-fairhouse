import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'fairhouse';


  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation (location:HousingLocation){
    this.selectedLocation = location;
  }
}
