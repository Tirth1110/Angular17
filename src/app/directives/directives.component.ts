import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent implements OnInit {

  name: string = 'tirth'

  employee: any[] = [
    { id: 100, name: 'Tirth' },
    { id: 101, name: 'Ajit' }, 
    { id: 102, name: 'Rohan' }, 
    { id: 103, name: 'Anuj' }, 
    { id: 104, name: 'Sunil' }, 
    { id: 105, name: 'Jay' },
  ]
  ngOnInit(): void {
  }
}
