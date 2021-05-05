import { Component, OnInit } from '@angular/core';
import { IFlickrPhoto } from 'src/app/interfaces/flickr.photo.interface';
import { BookmarksService } from 'src/app/services/bookmarks.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  photos: IFlickrPhoto[] = [];

  constructor(private readonly bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  onRemove(photo: IFlickrPhoto): void {
    this.bookmarksService.delete(photo.id);
    this.getPhotos();
  }

  private getPhotos(): void {
    this.photos = this.bookmarksService.get();
  }

}
