import { PipeTransform, Pipe } from '@angular/core';

@Pipe( {
    name: 'userimage'
}
)
export class ImagePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
         if (!value) {
            return 'assets/user.png';
         }
         return value;
    }
}
