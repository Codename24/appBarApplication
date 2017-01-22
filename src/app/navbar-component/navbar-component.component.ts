import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  Input
} from '@angular/core';
import { SearchComponent } from '../search/search.component'

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
    ])


  ]

})
export class NavbarComponentComponent implements OnInit {

  constructor() { }
  state: string = 'closed'
  buttonValue:string ='< Go to a matter...';
  ngOnInit() {
  }
  toggleMenu() {
    this.state = this.state == 'closed' ? 'opened' : "closed";
    this.buttonValue = this.state=='closed'?' Go to a matter...':'>'
  }
  openNav() {

  }

}
