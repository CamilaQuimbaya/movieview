import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  imports: [],
  templateUrl: './weather-list.html',
  styleUrl: './weather-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherList {

}
