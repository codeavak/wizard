import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicateFinderService {
   checkDuplicateInObject=(propertyName, inputArray) =>{
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

}
