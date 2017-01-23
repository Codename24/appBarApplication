import {Injectable} from '@angular/core'

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