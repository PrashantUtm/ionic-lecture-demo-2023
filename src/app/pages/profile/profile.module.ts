import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { LectureOneLabelComponent } from 'src/app/components/lecture-one-label/lecture-one-label.component';
import { ActivateAccountComponent } from 'src/app/components/activate-account/activate-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, LectureOneLabelComponent, ActivateAccountComponent]
})
export class ProfilePageModule {}
