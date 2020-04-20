import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    isShrunk: boolean = false;

    constructor(zone: NgZone) {
        window.onscroll = () => {
            zone.run(() => {
                if (window.pageYOffset > 0) {
                    this.isShrunk = true;
                } else {
                    this.isShrunk = false;
                }
            });
        }
    }

  ngOnInit() {
  }

}
