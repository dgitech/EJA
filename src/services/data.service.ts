import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpMsgService } from './process-http-msg.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  options = {headers: new Headers()};
  //models decleration
  protected baseUrl:string="https://cors-anywhere.herokuapp.com/";
  //protected baseUrl:string="";
  protected api:string="api";
  
  constructor(
    private http: Http,
    private processHTTPMsgService : ProcessHttpMsgService
    ) { }
    
   Invoke(method, url, data=null,params=null) {
    //this.options.headers.set('Access-Control-Allow-Origin',"*");
    if (params) url+="?"+params;
     method = method.toUpperCase();
      if(method.indexOf('GET')!=-1 || method.indexOf('DELETE')!=-1)  data={search:data,headers:this.options.headers};
         return this.http[method.toLowerCase()](this.baseUrl + url,data,this.options)
          .map(res => { return this.processHTTPMsgService.extractData(res); })
          .catch(error => {
            if (error.status==404 || error.status==401) {
             } 
             return this.processHTTPMsgService.handleError(error); });

   }

}
