import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abt-approach',
  imports: [CommonModule],
  templateUrl: './abt-approach.html',
  styleUrl: './abt-approach.scss',
})
export class AbtApproach {
villageStats = [
  { label: 'लोकसंख्या', count: '१५,०००+', icon: 'bi-people' },
  { label: 'घरे', count: '३,२००', icon: 'bi-house-door' },
  { label: 'वार्ड', count: '६', icon: 'bi-diagram-3' },
  { label: 'पुरुष', count: '३८०८', icon: 'bi-gender-male' },
  { label: 'महिला', count: '३९७२', icon: 'bi-gender-female' },
  { label: 'कुटुंब संख्या', count: '२२७०', icon: 'bi-house-heart' },

  { label: 'मतदारांची संख्या', count: '७३८३', icon: 'bi-person-check' },
  { label: 'लागवडी योग्य क्षेत्र', count: '७२३ हेक्टर ७ आर', icon: 'bi-tree' },
  { label: 'बागायत क्षेत्र', count: '-', icon: 'bi-flower1' },

  { label: 'स्ट्रीट लाईट पोल', count: '५४६', icon: 'bi-lightbulb' },
  { label: 'अंगणवाडी', count: '४', icon: 'bi-building' },
  { label: 'जिल्हा परिषद शाळा', count: '२', icon: 'bi-mortarboard' },

  { label: 'पोस्ट ऑफिस', count: '१', icon: 'bi-envelope-paper' },
  { label: 'तलाठी ऑफिस', count: '१', icon: 'bi-briefcase' },
  { label: 'आरोग्य उपकेंद्र', count: '१', icon: 'bi-hospital' },

  { label: 'नळ कनेक्शन', count: '१८७५', icon: 'bi-droplet' },
  { label: 'सार्वजनिक विहीर', count: '२', icon: 'bi-water' },
  { label: 'सार्वजनिक बोअर', count: '५', icon: 'bi-water' },

  { label: 'महिला बचत गट', count: '१००+', icon: 'bi-people-fill' },
  { label: 'प्रधानमंत्री घरकुल', count: '११', icon: 'bi-house-check' }
];


bgClasses = [
  'bg-primary-subtle',
  'bg-success-subtle',
  'bg-warning-subtle',
  'bg-info-subtle',
  'bg-secondary-subtle'
];
}
