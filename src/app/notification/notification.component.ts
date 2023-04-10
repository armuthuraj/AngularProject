import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
                <p>This Website uses cookies to provide better user experience.</p>
                <div class="close"><button class="btn" (click)="closeNotification()")>X</button></div>
              </div>`,
  styles: ["div{margin: 10px 0px; padding: 20px 10px; background-color:#FAD7A0; text-align: center;}","p{font-size: 14px;}",".close{float: right; margin-top: -39px;}"]
})
export class NotificationComponent {
  closeNotification(){
    
  }

}
   