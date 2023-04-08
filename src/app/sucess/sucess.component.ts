import { Component } from '@angular/core';

@Component({
  selector: 'app-sucess',
  template: `<p>{{message}}</p>`,
  styles: [`p{
    text-align: center;
    color: darkseagreen;
    font-size: medium;
   };`]
})
export class SucessComponent {
  message = "This is success message"
}
