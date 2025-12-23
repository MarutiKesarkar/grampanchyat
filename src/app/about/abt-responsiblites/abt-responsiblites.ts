import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abt-responsiblites',
  imports: [CommonModule],
  templateUrl: './abt-responsiblites.html',
  styleUrl: './abt-responsiblites.scss',
})
export class AbtResponsiblites {
 items = [
    {
      title: 'सफाई व स्वच्छता',
      description: 'गावातील रस्ते, गल्ली व सार्वजनिक ठिकाणे स्वच्छ ठेवणे.',
      bgColor: '#f8f9ff', // light blue
      img:'reponsiblities/resp-1.png',
    },
    {
      title: 'पाणीपुरवठा',
      description: 'शुद्ध पिण्याचे पाणी गावातील प्रत्येक घरापर्यंत पोहचविणे.',
      bgColor: '#f3f7f4', // light green
      img:'reponsiblities/resp-2.png',
    },
    {
      title: 'शैक्षणिक सुविधा',
      description: 'शाळा, उपशाळा व इतर शैक्षणिक उपक्रमांचे आयोजन व विकास.',
      bgColor: '#fff6f0', // light orange
      img:'reponsiblities/resp-3.png',
    },
    {
      title: 'आरोग्य सुविधा',
      description: 'प्राथमिक आरोग्य केंद्रे, लसीकरण मोहिमा आणि आरोग्यविषयक जनजागृती.',
      bgColor: '#fdf4ff', // light purple
      img:'reponsiblities/resp-4.png',
    },
    {
      title: 'गावाचा विकास',
      description: 'रस्ते, सार्वजनिक बांधकामे, नाल्यांची देखभाल व इतर सुविधा सुनिश्चित करणे.',
      bgColor:  '#fef9f2', // light yellow
      img:'reponsiblities/resp-5.png',
    },
    {
      title: 'शासनाच्या योजनांची अंमलबजावणी',
      description: 'केंद्र व राज्य सरकारच्या योजना गावापर्यंत पोहोचवणे.',
      bgColor:  '#f1f5f9',  // light slate
      img:'reponsiblities/resp-6.png',
    }
  ];
}
