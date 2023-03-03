import { Component } from '@angular/core';
import { DataService } from './dataservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent {
  title = 'new-project';

constructor(private dataService : DataService){

}

}
