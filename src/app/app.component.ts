import {Component, OnInit} from '@angular/core';
import {TimelineLite, Elastic, CSSPlugin, TweenMax} from 'gsap/all';

const gsapStuff = [CSSPlugin, TweenMax, TimelineLite]; // To prevent tree shaking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gsap-try';

  ngOnInit(): void {
      const tl = new TimelineLite({
          paused: true
      });

      tl.from('#angular-logo', 2, {
          opacity: 2,
          scale: 2,
          ease: Elastic.easeOut
      });

      tl.play();
  }
}
