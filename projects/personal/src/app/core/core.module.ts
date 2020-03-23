import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../features/portfolio/home.module';

@NgModule({
    declarations: [],
    imports: [
        // vendor
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    exports: [
    ]
})
export class CoreModule { }
