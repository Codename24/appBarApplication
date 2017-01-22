import { Component } from '@angular/core';
import {NavbarComponentComponent} from './navbar-component/navbar-component.component';
import {DropdownComponent} from './dropdown/dropdown.component';


export class DropdownValue
{
  value:string;
  label:string;
  constructor(value: string, label: string )
  {
    this.label = label;
    this.value = value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}


