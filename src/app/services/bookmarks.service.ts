import { Injectable } from '@angular/core';
import { IFlickrPhoto } from '../interfaces/flickr.photo.interface';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor() { }

  add(photo: IFlickrPhoto): void {
    localStorage.setItem(photo.id, JSON.stringify(photo));
  }

  delete(id: string): void {
    localStorage.removeItem(id);
  }

  get(): IFlickrPhoto[] {
    const photos: IFlickrPhoto[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      photos.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!))
    }
    return photos;
  }
}
