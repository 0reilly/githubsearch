   import {Injectable } from '@angular/core';
   import { Http, Headers} from '@angular/http';
   import 'rxjs/add/operator/map';

   @Injectable()
   export class GithubService{
       private username:string;
       private client_id = '22c35764306cbdfeaf95';
       private client_secret = '6b5b2df4de5589fa63fd5fea97ea75da6ce5929c';
   }