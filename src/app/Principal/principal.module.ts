import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryComponent } from './gallery/gallery.component';
import { PrincipalRoutes } from './principal.routing';
import {AppMaterialModule} from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, PrincipalRoutes, AppMaterialModule]
})
export class PrincipalModule {}
