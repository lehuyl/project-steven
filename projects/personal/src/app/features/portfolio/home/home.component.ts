import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lehuyl-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    covidDescription: String;
    constructor() {}

    ngOnInit(): void {
        this.covidDescription = 'Used Amcharts to create a time series graph that depict worldwide infection and death rates. ';
        this.covidDescription += 'We fetched data from one of many endpoints and stored them in state using NGRX.'
    }
}
