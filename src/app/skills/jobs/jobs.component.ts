import { Component, OnInit } from '@angular/core';
import { DuplicateFinderService } from 'src/app/duplicate-finder.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  Skills: any[];
  onSkillTxtBlur;
  addSkill;
  removeSkill;
  constructor(private duplicateFinderService: DuplicateFinderService) { }

  ngOnInit() {

    this.removeSkill = function (index) {
      console.log(`now removing ${index}`)
      this.Skills.splice(index, 1);
    }
    this.addSkill = function () {
      let count = this.Skills.length + 1;
      this.Skills.push({ 'skill': 'job ' + count });
    }
    this.Skills = [{ 'skill': 'job 1' }, { 'skill': 'job 2' }, { 'skill': 'job 3' }]
    this.onSkillTxtBlur = function () {
      this.duplicateFinderService.checkDuplicateInObject('skill', this.Skills);

    }
  }

}
