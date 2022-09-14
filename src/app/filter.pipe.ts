import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './plainlayout/student';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students : Student[], searchValue : string): any {
    if (students.length === 0 || searchValue == ''){
      return students;
    }else{
    return students.filter(std =>{
        return std.nama.toUpperCase().includes(searchValue.toUpperCase())
      })
    }
  }

}
