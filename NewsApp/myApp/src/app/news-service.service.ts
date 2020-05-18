import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  API_KEY = 'f39ed652a14945c88003010b4c8b87ad';
  constructor(private httpClient: HttpClient) { }
  getNews(){
    
  }
  getData(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    
  }

}
