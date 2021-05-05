import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFlickr } from '../interfaces/flickr.interface';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  private readonly url = `${environment.flickr.url}${environment.flickr.search}`;
  
  constructor(private readonly httpClient: HttpClient) { }

  getFlickr(keyword: string): Observable<IFlickr> {
    const options: HttpParamsOptions = {
      fromObject: {
        'api_key': environment.flickr.key,
        'text': keyword,
        'format': 'json',
        'nojsoncallback': '1',
        'per_page': '21'
      }
    }
    const params: HttpParams = new HttpParams(options);
    return this.httpClient.get<IFlickr>(this.url, {params});
  }
}
