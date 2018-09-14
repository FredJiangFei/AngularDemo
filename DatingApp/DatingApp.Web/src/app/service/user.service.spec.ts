import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { defer, of, throwError } from 'rxjs';
import { PaginatedResult, Pagination } from '../domain/pagination';
import { User } from '../domain/user.domain';
import { async } from 'rxjs/internal/scheduler/async';

describe('UserService Test', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;

   beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        userService = new UserService(<any> httpClientSpy);
   });

   it('should return expected users (HttpClient called once)', () => {
    const expectedUsers: PaginatedResult<User[]> = {
        result: [{ id: 1, username: 'A' }, { id: 2, username: 'B' }],
        pagination: new Pagination()
    };

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    userService.getUsers().subscribe(
      users => expect(users).toEqual(expectedUsers, 'expected users')
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', async () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    userService.getUsers().subscribe(
      users => fail('expected an error, not users'),
      error  => {
        expect(error.error).toContain('test 404 error');
      }
    );
  });
});

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}
