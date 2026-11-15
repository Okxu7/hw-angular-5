// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-list-item',
//   standalone: false,
//   styleUrl: './list-item.css',
//   templateUrl: './list-item.html',
// })
// export class ListItem {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: false,
  templateUrl: './list-item.html',
  styleUrl: './list-item.css'
})
export class ListItem {
  @Input() itemText?: string;
}