import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab3Page } from '../tab3/tab3.page';
import { IonRouterOutlet } from '@ionic/angular';
import { NewsServiceService } from '../news-service.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  
data:any;
constructor(private newService:NewsServiceService) { 
}


ngOnInit(){
  this.newService.getData().subscribe(data => {
    console.log(data);
    this.data=data;
  });
    
  
}
}
