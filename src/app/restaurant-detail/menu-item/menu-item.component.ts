import { MenuItem } from './../menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emmitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
