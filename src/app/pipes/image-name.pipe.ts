import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageName'
})
export class ImageNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let newValue = value.toLowerCase();
    newValue = newValue.replace(/ /g, '-');
    return '/assets/images/products/' + newValue + '.jpeg';
  }

}
