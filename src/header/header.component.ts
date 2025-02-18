import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { SharedService } from '../app/shared.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  data: boolean = false;
  constructor(private dataService: SharedService) { }
  ngOnInit() {
    this.dataService.data2$.subscribe(data => {
      this.data = data;
    });
  }
  selectedTab = 'home';
  @Output() headerChanged = new EventEmitter<string>();

  // Method to switch tabs
  selectTab(tab: string) {
    this.selectedTab = tab;
    this.headerChanged.emit(this.selectedTab);
    this.dataService.updateData(this.selectedTab);
    if(tab === 'caseStudies'){
      window.open('https://docs.google.com/presentation/d/1M5sOVmLIDVYU8Ft5Xu6ckbcszsWYaukck3fuHPHBXWA/edit#slide=id.g1838cf7cb1e_2_75');
    }
    if(tab === 'resume'){
      window.open(' https://drive.google.com/file/d/1AgSwMWDRQlHZifdeyII2r-3Wy_yEWkxb/view');
    } 
  }
}
