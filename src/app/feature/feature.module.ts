import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddProfileComponent
  ]
})
export class FeatureModule { }
