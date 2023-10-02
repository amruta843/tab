import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
selectedFramework : string="angular"

  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(frame:string){
    this.selectedFramework=frame;
  }
}
