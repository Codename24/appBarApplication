import { Component, OnInit, Input , Output , EventEmitter,ElementRef} from '@angular/core';


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
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
 export class DropdownComponent implements OnInit {

//   @Output() select = new EventEmitter();

//  values: DropdownValue;

//  constructor(){   }
//   ngOnInit() {
//     this.select.emit(this.values[0]);
//   } 
@Input()
values: DropdownValue[];
@Output() select:EventEmitter<any>;

constructor() {
    this.select = new EventEmitter();
  }

  selectItem(value) {
    this.select.emit(value);
  }
ngOnInit()
{

}
}
