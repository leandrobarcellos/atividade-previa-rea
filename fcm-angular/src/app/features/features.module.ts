import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcmComponent } from './fcm/fcm.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [FcmComponent],
    exports: [
        FcmComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
