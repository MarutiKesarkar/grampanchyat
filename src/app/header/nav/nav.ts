import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { Collapse } from 'bootstrap';

interface NavItem {
  label: string;
  route: string;
  exact?: boolean;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
navItems: NavItem[] = [
    {
      label: 'मुख्यपृष्ठ',
      route: '/home',
      exact: true
    },
    {
      label: 'ग्रामपंचायती बद्दल',
      route: '/about'
    },
    {
      label: 'सेवा',
      route: '/services'
    },
    {
      label: 'महत्त्वाची ठिकाणे',
      route: '/places'
    },
   {
      label: 'छायाचित्र दालन',
      route: '/gallery'
    },
    {
      label: 'संपर्क',
      route: '/contact'
    }
  ];


  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  }
  
}
