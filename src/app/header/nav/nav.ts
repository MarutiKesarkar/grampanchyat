import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

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
      label: 'संपर्क',
      route: '/contact'
    }
  ];
}
