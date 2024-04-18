import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homework 1';
  Me='Hi, I am Rosen Tonev, 20 years old. Born in Svilengrad and raised in Haskovo. Second year student at FMI, studying STD.';
  Hobbies='I have interest in gaming, making games and bits and pieces of front-end coding and back-end.I am generally good with Databases, but in return my designs are weak...';
  Creator='My favorite content creator would have to be Installation00. Just great quality and talking skills. I also like the way he presents his content. ';
Channel='I dont have a channel for creating content, but if i had one, i would most likely be focused on tech and gaming.';
Info='I am a student at FMI, studying Software Technologies and Design. I am currently in my second year and i am looking forward to learning more about the field.';
InfoPricing='Here are my simple pricing ideas: 1. 10$ for a simple website 2. 20$ for a more complex website 3. 30$ for a website with a database 4. 40$ for a website with a database and a server.';
}
