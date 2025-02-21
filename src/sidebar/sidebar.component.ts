import { Component, OnInit } from '@angular/core';
import { SharedService } from '../app/shared.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  data: string = '';
  dark = false;
  constructor(private dataService: SharedService) {}
  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      this.data = data; 
    });
    this.dataService.data3$.subscribe(data => {
      this.data = data; 
    }); 
    this.dataService.data2$.subscribe(data => {
      this.dark = data; 
    }); 
  }
}
