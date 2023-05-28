import { Images } from './../../Principal/gallery/images';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GalleryServicesService {
  private readonly API = 'http://localhost:9090/main/test';

  constructor(private htppClient: HttpClient) {}

  list(): Observable<Images[]> {
    return this.htppClient
      .get<Images[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap((response) => console.log(response))
        );
  }
  sendImage(selectedFile: File | null): void {
    if(selectedFile){
      const formData = new FormData();
      formData.append('file', selectedFile);
      this.htppClient.post('http://localhost:9090/main/upload', formData).subscribe(
        (Response) => {
          console.log("Sucess");
        },
        (Error) => {
          console.log("an Error has occured");
        }
      )
    }
  }
}
