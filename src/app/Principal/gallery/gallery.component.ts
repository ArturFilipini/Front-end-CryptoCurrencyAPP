import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryServicesService } from 'src/app/gallery/services/gallery-services.service';
import { Images } from './images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

selectedFile: File | null = null;

onFileSelected(event: any): void {
  this.selectedFile = event.target.files[0];
}

@Input() dataSource$: Observable<Images[]>;
  displayedColumns = ['name', 'category'];


  constructor(private service: GalleryServicesService) {
    this.dataSource$ = this.service.list();
  }
  dataSend(): void{
      this.service.sendImage(this.selectedFile);
  }
  ngOnInit(): void {
  }
}
