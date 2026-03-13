import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../header/header';
import { Footer } from "../../footer/footer";
import { Home } from "../../../feactures/home/home/home";


@Component({
  selector: 'app-public',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class Public {
}
