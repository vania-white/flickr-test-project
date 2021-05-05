import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFlickrPhoto } from 'src/app/interfaces/flickr.photo.interface';

@Component({
  selector: 'app-search-photo',
  templateUrl: './search-photo.component.html',
  styleUrls: ['./search-photo.component.scss']
})
export class SearchPhotoComponent implements OnInit {
  @Input()
  photo: IFlickrPhoto | undefined;

  @Output()
  onBookmark: EventEmitter<IFlickrPhoto> = new EventEmitter<IFlickrPhoto>();

  constructor() { }

  ngOnInit(): void {
  }

  emit(): void {
    this.onBookmark.emit(this.photo);
  }
}
