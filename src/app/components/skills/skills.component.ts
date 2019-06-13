import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
Skills: any[];
onSkillTxtBlur

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
      this.Skills.push({'skill':'skill '+count});
    }
this.Skills=[{'skill':'skill 1'},{'skill':'skill 2'},{'skill':'skill 3'}]
    this.onSkillTxtBlur=function(){
checkDuplicateInObject('skill',this.Skills);

    }
  }

}
