import { Component, OnInit, Input , Output , EventEmitter,ElementRef,Injectable} from '@angular/core';
import {DropdownValue} from '../../app/dropdownvalue'




@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

@Input() public dropDownValues: DropdownValue[];

ngOnInit()
{

}
constructor(dropDownValues:DropdownValue[])
{
  this.dropDownValues = dropDownValues;
}
}
