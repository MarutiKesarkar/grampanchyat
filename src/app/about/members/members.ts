import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  imports: [CommonModule],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members {
 topMembers = [
  {name : 'श्री. राजेश पाटील' , postion:'सरपंच', image:'', description:'गाव विकास उपक्रमांचे नेतृत्व करणे.', contact:'१२३४५६७८९०'},
  {name : 'श्री. अमित देशमुख' , postion:'उपसरपंच', image:'', description:' आरोग्य आणि युवा कार्यक्रमांवर लक्ष केंद्रित केले.', contact:'१२३४५६७८९०'},
  {name : 'श्री. अ ब क ड' , postion:'ग्रामसेवक', image:'', description:' आरोग्य आणि युवा कार्यक्रमांवर लक्ष केंद्रित केले.', contact:'१२३४५६७८९०'}
 ]

 wardMembers = [
  {name : 'श्री. अ ब क ड' , postion:'सदस्य', image:'', wardNo:'1', contact:'१२३४५६७८९०'},
  {name : 'श्री. अ ब क ड' , postion:'सदस्य', image:'', wardNo:' 2', contact:'१२३४५६७८९०'},
  {name : 'श्री. अ ब क ड' , postion:'सदस्य', image:'', wardNo:' 3', contact:'१२३४५६७८९०'},
   {name : 'श्री. अ ब क ड' , postion:'सदस्य', image:'', wardNo:' 3', contact:'१२३४५६७८९०'},
 ]
}
