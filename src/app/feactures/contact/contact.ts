import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  showMenu = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.showMenu = !this.showMenu;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.contact-dropdown');
    
    if (dropdown && !dropdown.contains(target)) {
      this.showMenu = false;
    }
  }
}