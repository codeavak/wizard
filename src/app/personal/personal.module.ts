import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinfoComponent } from './pinfo/pinfo.component';
import { CinfoComponent } from './cinfo/cinfo.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ PinfoComponent,
    CinfoComponent
 ],
  imports: [    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class PersonalModule { }
