import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { HeadlinesPageRoutingModule } from './headlines-routing.module';

import { HeadlinesPage } from './headlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HeadlinesPageRoutingModule
  ],
  declarations: [
    HeadlinesPage
  ]
})
export class HeadlinesPageModule {}
