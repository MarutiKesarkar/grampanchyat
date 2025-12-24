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
  { label: 'लोकसंख्या', count: '१५,०००+', icon: 'villageIcons/icon-1.png' },
  { label: 'घरे', count: '३,२००', icon: 'villageIcons/icon-2.png' },
  { label: 'वार्ड', count: '६', icon: 'villageIcons/icon-3.png' },
  { label: 'पुरुष', count: '३८०८', icon: 'villageIcons/icon-4.png' },
  { label: 'महिला', count: '३९७२', icon: 'villageIcons/icon-22.png' },
  { label: 'कुटुंब संख्या', count: '२२७०', icon: 'villageIcons/icon-5.png' },

  { label: 'मतदारांची संख्या', count: '७३८३', icon: 'villageIcons/icon-7.png' },
  { label: 'लागवडी योग्य क्षेत्र', count: '७२३ हेक्टर ७ आर', icon: 'villageIcons/icon-8.png' },
  { label: 'बागायत क्षेत्र', count: '-', icon: 'villageIcons/icon-9.png' },

  { label: 'स्ट्रीट लाईट पोल', count: '५४६', icon: 'villageIcons/icon-10.png' },
  { label: 'अंगणवाडी', count: '४', icon: 'villageIcons/icon-12.png' },
  { label: 'जिल्हा परिषद शाळा', count: '२', icon: 'villageIcons/icon-23.png' },

  { label: 'पोस्ट ऑफिस', count: '१', icon: 'villageIcons/icon-13.png' },
  { label: 'तलाठी ऑफिस', count: '१', icon: 'villageIcons/icon-14.png' },
  { label: 'आरोग्य उपकेंद्र', count: '१', icon: 'villageIcons/icon-15.png' },

  { label: 'नळ कनेक्शन', count: '१८७५', icon: 'villageIcons/icon-18.png' },
  { label: 'सार्वजनिक विहीर', count: '२', icon: 'villageIcons/icon-17.png' },
  { label: 'सार्वजनिक बोअर', count: '५', icon: 'villageIcons/icon-18-2.png' },

  { label: 'महिला बचत गट', count: '१००+', icon: 'villageIcons/icon-19.png' },
  { label: 'प्रधानमंत्री घरकुल', count: '११', icon: 'villageIcons/icon-21.png' }
];


bgClasses = [
  'bg-primary-subtle',
  'bg-success-subtle',
  'bg-warning-subtle',
  'bg-info-subtle',
  'bg-secondary-subtle'
];
}
