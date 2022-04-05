import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {AuthService} from './auth.service';



export abstract class Service<T> {

  protected constructor(protected path: string,
                        protected http: HttpClient,
                        protected router: Router,
                        protected authService: AuthService) {}

  
}
