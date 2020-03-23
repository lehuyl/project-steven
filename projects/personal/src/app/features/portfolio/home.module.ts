import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

// modules
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        ContactFormComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule
    ],
    exports: [
        ContactFormComponent,
        HomeComponent
    ]
})
export class HomeModule { }
