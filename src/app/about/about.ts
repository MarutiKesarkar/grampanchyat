import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbtResponsiblites } from "./abt-responsiblites/abt-responsiblites";
import { AbtApproach } from "./abt-approach/abt-approach";

@Component({
  selector: 'app-about',
  imports: [CommonModule, AbtResponsiblites, AbtApproach],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

 
}
