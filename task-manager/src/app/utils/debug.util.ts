import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

// declare module 'rxjs' {
//     interface Observable<T>{
//         debug: (...any) => Observable<T>
//     }
// }

// Observable.prototype.debug = function (message: string) {
//     return this.do(
//         (next) => {
//             if (!environment.production) {
//                 console.log(message, next)
//             }
//         },
//         (error) => {
//             if (!environment.production) {
//                 console.error('ERROR>>', message, error)
//             }
//         },
//         () => {
//             if (!environment.production) {
//                 console.log('Completed - ')
//             }
//         }
//     );
// }