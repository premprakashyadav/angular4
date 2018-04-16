import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp latest Again';
  months = ['Jan' , 'Feb' , 'March' , 'April' , 'May' , 'June' , 'July' , 'Aug' , 'Sep', 'Oct', 'Nov' , 'Dec'];
  isVisible = false;
  isVisible1 = true;
  showContent(event) {
    console.log(event);

  }
  changeDropdown(event) {
    console.log(event.target.value);
    console.log('all months');
  }
}
