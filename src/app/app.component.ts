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
  userName:String=""

  onClick(event:any)
  {
    console.log(event)
    window.open("https://www.bridgelabz.com")
  }
}
