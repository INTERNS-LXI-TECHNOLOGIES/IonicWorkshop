import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

  constructor(private http: HttpClient) { 
  }

  data;
  

  getNews():void{
    var url = 'http://newsapi.org/v2/top-headlines?country=in&' +'apiKey=ad181e1ee3454ded8fea6a84d95a5190';
    this.http.get(url)
    .subscribe(
      data => {
        // Set the data to display in the template
        this.data = data['articles'];
      }
    );
   
  }

  ngOnInit() {
    this.getNews();
  }

}
