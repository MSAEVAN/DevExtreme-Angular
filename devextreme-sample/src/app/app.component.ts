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

  dataSource: DataSource;

  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  constructor() {
    this.dataSource = data;
  }
}
