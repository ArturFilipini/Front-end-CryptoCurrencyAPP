import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  exports: [MatCardModule, MatToolbarModule, MatTableModule, MatProgressSpinnerModule, MatIconModule],
})
export class AppMaterialModule {}
