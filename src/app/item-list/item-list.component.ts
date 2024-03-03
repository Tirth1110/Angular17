import { Component, ViewEncapsulation } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule ,ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None,
})
export class ItemListComponent {
  items: number[] = new Array(2);

  showItems: boolean = false;

}