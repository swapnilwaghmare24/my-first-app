import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imgUrl= "../assets/logo.jpg"
  message: String='hello from bridgelabz'
  userName:string=""
  errorMsg:string=""

  onClick(event:any)
  {
    console.log(event)
    window.open("https://www.bridgelabz.com")
  }
  onInput(event:any)
  {
    const nameRegx=RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(nameRegx.test(this.userName))
    {
      this.errorMsg="";
      return;

    }

    this.errorMsg="please enter valid characters";

  }
}
