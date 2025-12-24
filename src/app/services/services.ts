import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  servicesList = [
    { label: 'शासकीय योजना', discription: 'ग्रामविकासासाठी लागणाऱ्या सर्व योजनांची माहिती.' },
    { label: 'माहितीचा अधिकार', discription: 'पारदर्शकतेसाठी नागरिकांचा हक्क आणि जबाबदारी.' },
    { label: 'निधी जमाखर्च', discription: 'निधींचे तपशील आणि खर्चाचा लेखा व पारदर्शक अहवाल.' },
    { label: 'चालू घडामोडी', discription: 'ग्रामपंचायतीच्या ताज्या बातम्या आणि निर्णय.' },
    { label: 'करिअर मार्गदर्शन', discription: 'कौशल्य शोधा — करिअर ठरवा यश मिळवा.' },
    { label: 'योजना आणि लाभार्थीं', discription: 'योजना आणि लाभार्थींची संपूर्ण माहिती — पारदर्शकतेकडे एक पाऊल' },
    { label: 'उपक्रम', discription: 'जनहितासाठी राबवलेले उपक्रम — विकासाच्या दिशेने वाटचाल.' },
    { label: 'महत्तवपूर्ण प्रकल्प', discription: 'सशक्त आणि आत्मनिर्भर गावनिर्मितीसाठी ग्रामपंचायतीचे परिवर्तनशील प्रकल्प.' },
    { label: 'दाखल्यांची माहिती', discription: 'दाखल्यांसाठी माहिती मिळवा' },
    { label: 'परिपत्रके', discription: 'नवीन परिपत्रके आणि अद्ययावत सूचना' },
    { label: 'समितीबद्दल माहिती', discription: 'ग्रामपंचायतीच्या समितींची सविस्तर माहिती' },
    { label: 'शिक्षण आणि युवा', discription: 'युवा सक्षमीकरण आणि विकास उपक्रम' },

  ]
}
