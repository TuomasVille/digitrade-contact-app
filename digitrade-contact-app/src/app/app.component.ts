import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'dtca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = new FormControl('push');
  title = 'contact-webapp';
}
