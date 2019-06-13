import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { JobsComponent } from './jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [   SkillsComponent,
    JobsComponent],
  imports: [    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class SkillsModule { }
