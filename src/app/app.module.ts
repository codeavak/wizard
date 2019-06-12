import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinfoComponent } from './components/pinfo/pinfo.component';
import { CinfoComponent } from './components/cinfo/cinfo.component';
import { SkillsComponent } from './components/skills/skills.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    PinfoComponent,
    CinfoComponent,
    SkillsComponent,
    JobsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
