import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        const options = {
            strings: ['full-stack','.Net', 'Angular', 'SQL', 'Frontend'],
            typeSpeed: 75,
            backSpeed: 75,
            showCursor: true,
            cursorChar: '|',
            startDelay: 500,
            backDelay: 1000,
            loop: true
        };

        const typed = new Typed('.typed-skills', options);
  }

}
