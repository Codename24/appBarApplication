import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  Input,
  Optional,
  Inject
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SearchComponent } from '../search/search.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {DropdownValue} from '../../app/dropdownvalue'

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css', '../../app/font.css'],
  
  
  animations: [
    trigger('searchComponentTrigger', [
      state('closed', style({
        display: 'none'
      })),
      state('opened', style({

        display: 'block'
      })),
      ,
      transition('closed => opened', animate('400ms ease-in-out')),
      transition('opened => closed', animate('400ms ease-in-out'))
    ]),
    trigger('buttonTrigger', [
      state('closed', style({
      })),
      state('opened', style({
        width: '50px',
        background:'#194062',
        outline:'none',
        position:'relative'           
      }))
      ,
      transition('closed => opened', animate('400ms ease-in-out')),
      transition('opened => closed', animate('400ms ease-in-out'))
    ]),
    
    trigger('sidebarComponentTrigger', [
      state('closed', style({
        display: 'none'
      })),
      state('opened', style({
        display: 'block'
      })),
      ,
      transition('closed => opened', animate('400ms ease-in-out')),
      transition('opened => closed', animate('400ms ease-in-out'))
    ]),
	
     trigger('dropdownTrigger', [
      state('closed', style({
        display: 'none'
      })),
      state('opened', style({

        display: 'block'
      })),
      ,
      transition('closed => opened', animate('200ms ease-in-out')),
      transition('opened => closed', animate('200ms ease-in-out'))
    ])
  ]

})
export class NavbarComponentComponent implements OnInit {

  constructor() { }
  state: string = 'closed';
  firsDropDownState:string = 'closed';
  secondDropDownState:string = 'closed'
  sidebarState: string = 'closed'
  buttonValue:string ='< Go to a matter...';
  documentsDropDownValues:DropdownValue[]; 

 
  ngOnInit() {
   this.documentsDropDownValues = [
  new DropdownValue("#","Recent"),
  new DropdownValue("#","Favourites")];
  }
  toggleMenu() {
    this.state = this.state == 'closed' ? 'opened' : "closed";
    this.buttonValue = this.state=='closed'?' Go to a matter...':'>'
  }

  openDocumentsDrodown() {
  this.firsDropDownState = this.firsDropDownState == 'closed' ? 'opened' : "closed";
  }

  openMattersDrodown() {
    this.secondDropDownState= this.secondDropDownState == 'closed' ? 'opened' : "closed";
  }

  toggleNavBar() {
    this.sidebarState = this.sidebarState == 'closed' ? 'opened' : "closed";
  }

}
