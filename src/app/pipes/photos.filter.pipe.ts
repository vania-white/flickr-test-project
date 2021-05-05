import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IFlickrPhoto } from '../interfaces/flickr.photo.interface';
import { FlickrService } from '../services/flickr.service';
import { IFlickr } from '../interfaces/flickr.interface';

@Pipe({
  name: 'photosFilter'
})
export class PhotosFilterPipe implements PipeTransform {

  constructor(private readonly flickrService: FlickrService) { }

  transform(photos: IFlickrPhoto[], search: string): Observable<IFlickrPhoto[]> {
    return search
      ? this.flickrService
        .getFlickr(search)
        .pipe(
          map((response: IFlickr) => response.photos.photo)
        )
      : of([]);
  }
}
