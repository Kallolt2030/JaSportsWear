import { Routes } from '@angular/router';
import { Public } from './core/pages/public/public';
import { Home } from './feactures/home/home/home';
import { Catalog } from './feactures/catalog/catalog/catalog';
import { Clothes } from './feactures/catalog/clothes/clothes';
import { Articles } from './feactures/catalog/articles/articles';
import { Contact } from './feactures/contact/contact';

export const routes: Routes = [
    {
    path: '',
    component: Public,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: Home },
      { path: 'catalog', component: Catalog },
      { path: 'clothes', component: Clothes },
      { path: 'articles', component: Articles },
      { path: 'contact', component: Contact },
    ]
  },
];


