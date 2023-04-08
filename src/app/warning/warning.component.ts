import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
  <p>{{message}}</p>
  `,
  styles: [`
    p{
    text-align: center;
    color: rgb(189, 75, 43);
    font-size: medium;
   };
`]
})
export class WarningComponent {
  message = "This is warning message"
}
