import { Component } from '@angular/core';
import { Contact } from "../../feactures/contact/contact";

@Component({
  selector: 'app-header',
  imports: [Contact],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
