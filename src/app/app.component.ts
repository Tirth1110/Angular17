import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
class Employee {
  constructor() {
    console.log('Employee constructor called');
  }
  show(){
    console.log('Employee show called');
  }
}
@Component({
  selector: 'app-root',
  standalone: true, // It's work as import module.ts file , Improve performance
  imports: [RouterOutlet, ItemListComponent],
  templateUrl: './app.component.html', // templateUrl is high priority element rather than template
  // template : `Tirth`,
  styleUrl: './app.component.scss',
  preserveWhitespaces: true,
  viewProviders: [Employee], // If want to call constructor of employee when injecting employee in component constructor then we need to use viewProviders
  // encapsulation : ViewEncapsulation.None // None used by default for child and parent components
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

  constructor(private _employee: Employee) {
    // _employee.show();
  }


  // @HostListener('mouseover', ['$event'])
  // show() {
  // }
}