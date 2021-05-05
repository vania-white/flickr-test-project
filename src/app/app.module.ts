import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { PhotosFilterPipe } from './pipes/photos.filter.pipe';
import { SearchPhotoComponent } from './components/search/search-photo/search-photo.component';
import { BookmarkPhotoComponent } from './components/bookmarks/bookmark-photo/bookmark-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmarksComponent,
    PhotosFilterPipe,
    SearchPhotoComponent,
    BookmarkPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
