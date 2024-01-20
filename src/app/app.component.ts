import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // It's work as import module.ts file
  imports: [RouterOutlet, ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  preserveWhitespaces: true,
})
export class AppComponent {
  title = 'v17App';
  isLoggedIn: boolean = false;
  name: string = 'Mon';

  loginLogout() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  students: any[] = [
    { id: 101, name: 'tirth' },
    { id: 102, name: 'jignesh' },
    { id: 103, name: 'lay' }
  ];
}