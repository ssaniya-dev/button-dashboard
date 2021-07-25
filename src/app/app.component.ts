import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'button-dashboard';
  outputMessage = ''
  rowFormat: string[][];

  constructor() {
    this.rowFormat = [
      ['d', 's', 'd', 's', 'd'],
      ['s', 'd', 's', 'd', 's'],
      ['d', 's', 'd', 's', 'd'],
      ['s', 'd', 's', 'd', 's'],
      ['d', 's', 'd', 's', 'd']
    ];
  }
  getColor(str: string) {
    if (str == 'd') {
      return 'btn btn-danger'
    } else {
      return 'btn btn-success'
    }
  }
  onClick() {
    this.outputMessage = "You have clicked a button"
  }
}
