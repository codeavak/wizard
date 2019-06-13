import { Component, OnInit } from '@angular/core';
import { DuplicateFinderService } from 'src/app/duplicate-finder.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Skills: any[];
  onSkillTxtBlur;
  removeSkill;
  addSkill;

  constructor(private duplicateFinderService: DuplicateFinderService) { }


  ngOnInit() {

    this.removeSkill = function (index) {
      console.log(`now removing ${index}`)
      this.Skills.splice(index, 1);
    }
    this.addSkill = function () {
      let count = this.Skills.length + 1;
      this.Skills.push({ 'skill': 'skill ' + count });
    }
    this.Skills = [{ 'skill': 'skill 1' }, { 'skill': 'skill 2' }, { 'skill': 'skill 3' }]
    this.onSkillTxtBlur = function () {
      this.duplicateFinderService.checkDuplicateInObject('skill', this.Skills);

    }
  }

}
