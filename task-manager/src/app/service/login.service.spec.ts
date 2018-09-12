import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('AuthService Test', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
   beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          LoginService
        ]
      });
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
   });

   it('can test HttpClient.get', () => {
    const testData = {name: 'Test Data'};

    httpClient.get<any>(`${environment.baseUrl}/auth/login`)
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne(`${environment.baseUrl}/auth/login`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
