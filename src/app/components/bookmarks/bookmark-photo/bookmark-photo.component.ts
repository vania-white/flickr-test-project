import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFlickrPhoto } from 'src/app/interfaces/flickr.photo.interface';

@Component({
  selector: 'app-bookmark-photo',
  templateUrl: './bookmark-photo.component.html',
  styleUrls: ['./bookmark-photo.component.scss']
})
export class BookmarkPhotoComponent implements OnInit {
  @Input()
  photo: IFlickrPhoto | undefined;

  @Output()
  onRemove: EventEmitter<IFlickrPhoto> = new EventEmitter<IFlickrPhoto>();

  constructor() { }

  ngOnInit(): void {
  }

  emit(): void {
    this.onRemove.emit(this.photo);
  }

}
