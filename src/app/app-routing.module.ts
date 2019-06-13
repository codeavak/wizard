import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinfoComponent } from './personal/pinfo/pinfo.component';
import { CinfoComponent } from './personal/cinfo/cinfo.component';
import { JobsComponent } from './skills/jobs/jobs.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [{path:"pinfo",component:PinfoComponent},
{path:"cinfo",component:CinfoComponent},
{path:"skills",component:SkillsComponent},
{path:"jobs",component:JobsComponent},
{path:"success",component:SuccessComponent},
{path:"",redirectTo:"/pinfo",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
