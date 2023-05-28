import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
];

export const PrincipalRoutes = RouterModule.forChild(routes);
