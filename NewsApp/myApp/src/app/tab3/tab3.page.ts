import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalCtrl: ModalController) {}
  // constructor(private routerOutlet: IonRouterOutlet,private modalCtrl: ModalController) {}
  
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: Tab2Page,
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop() // Get the top-most ion-modal
    });
    return await modal.present();
  }
  // dismiss() {
  //   // using the injected ModalController this page
  //   // can "dismiss" itself and optionally pass back data
  //   this.modalCtrl.dismiss({
  //     'dismissed': true
  //   });
  // }
  
  // async presentModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: Tab3Page,
      
  //     swipeToClose: true,
  //     presentingElement: this.routerOutlet.nativeEl
  //   });
  //   return await modal.present();
  // }

}
