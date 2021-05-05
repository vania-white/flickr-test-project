import { Component, OnInit } from '@angular/core';
import { IFlickrPhoto } from 'src/app/interfaces/flickr.photo.interface';
import { BookmarksService } from 'src/app/services/bookmarks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  photos: IFlickrPhoto[] = [];
  searchKeyword: string = '';

  constructor(private readonly bookmarksService: BookmarksService) { }

  ngOnInit(): void {}

  onBookmark(photo: IFlickrPhoto): void {
    this.bookmarksService.add(photo);
  }
}
