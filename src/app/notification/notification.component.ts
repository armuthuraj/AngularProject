import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
                <p>This Website uses cookies to provide better user experience.</p>
              </div>`,
  styles: ["div{margin: 10px 0px; padding: 20px 10px; background-color:#FAD7A0; text-align: center;}","p{font-size: 14px;}"]
})
export class NotificationComponent {

}
  