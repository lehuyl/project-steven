import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lehuyl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    PROFILE_PIC: string = '/assets/profile.png';

    constructor() {}

    ngOnInit(): void {}
}
