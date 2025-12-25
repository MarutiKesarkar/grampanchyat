import { Component } from '@angular/core';
import { TopSection } from './top-section/top-section';
import { Stats } from "./stats/stats";
import { Features } from "./features/features";
import { Mission } from "./mission/mission";
import { Announcements } from "./announcements/announcements";
import { Gallery } from "../gallery/gallery";
import { MemberTalk } from "./member-talk/member-talk";

@Component({
  selector: 'app-home',
  imports: [TopSection, Stats, Features, Mission, Announcements, MemberTalk],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
