import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'bookmarks', component: BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
