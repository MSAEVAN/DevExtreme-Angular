import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

declare var require: any;
const data: any = require('./sample.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devextreme-sample';

  // dataSource: DataSource;

  allMode: string = "";

  checkBoxesMode: string = "";
  

  dsampleData: any[] = [
    {"name": "Msa Evan", "email": "msaevan@gmail.com", "Country": "Bangladesh"},
    {"name": "Lio", "email": "msaevan@gmail.com", "Country": "India"},
    {"name": "Divya", "email": "msaevan@gmail.com", "Country": "India"},
    {"name": "Msa Evan", "email": "msaevan@gmail.com", "Country": "India"},
    {"name": "Msa Evan", "email": "msaevan@gmail.com", "Country": "Malay"},
    // {"name": "Msa Evan", "email": "msaevan@gmail.com"},
    // {"name": "Msa Evan", "email": "msaevan@gmail.com"},
    // {"name": "Msa Evan", "email": "msaevan@gmail.com"},
    // {"name": "Msa Evan", "email": "msaevan@gmail.com"},
    // {"name": "Msa Evan", "email": "msaevan@gmail.com"},
    // {"name": "Msa Evan", "email": "msaevan@gmail.com"},
  ];

  
  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  constructor() {
    // this.dataSource = data;

    this.allMode = 'allPages';
    // this.checkBoxesMode = dsampleData.current().startsWith('material') ? 'always' : 'onClick';

  }
}
