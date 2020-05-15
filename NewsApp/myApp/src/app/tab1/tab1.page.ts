import { Component } from '@angular/core';
import{ToastController} from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toastcntrl:ToastController) {}
  async test(){
    const toast=await this.toastcntrl.create({
      message:"Hello pushkala this message from toast",
      duration:2000
    });
    toast.present();
  }

}
