import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  preserveWhitespaces: true,
})
export class ItemListComponent {
  items: number[] = new Array(2);

  showItems: boolean = false;

}