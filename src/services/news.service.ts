import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class NewsService extends DataService {

 getNews(url){
  return this.Invoke("GET",url);
 }
}
