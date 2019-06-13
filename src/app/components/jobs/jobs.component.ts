import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    function checkDuplicateInObject(propertyName, inputArray) {
      var seenDuplicate = false,
          testObject = {};
    
      inputArray.map(function(item) {
        var itemPropertyName = item[propertyName].toLowerCase();    
        if (itemPropertyName.toLowerCase() in testObject) {
          testObject[itemPropertyName].duplicate = true;
          item.duplicate = true;
          seenDuplicate = true;
        }
        else {
          testObject[itemPropertyName] = item;
          delete item.duplicate;
        }
      });
    
      return seenDuplicate;
    }

    this.removeSkill=function(index){
      console.log(`now removing ${index}`)
      this.Skills.splice(index,1);
    }
    this.addSkill=function(){
      let count=this.Skills.length+1;
      this.Skills.push({'skill':'job '+count});
    }
this.Skills=[{'skill':'job 1'},{'skill':'job 2'},{'skill':'job 3'}]
    this.onSkillTxtBlur=function(){
checkDuplicateInObject('skill',this.Skills);

    }
  }

}
