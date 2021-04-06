import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  @Input() @Output() botonNum : Number = NaN;
  @Output() notify = new EventEmitter();
  
  constructor() {
   }

  ngOnInit() {
  }


}
