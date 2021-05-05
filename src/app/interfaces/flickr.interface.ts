import { IFlickrPhotos } from "./flickr.photos.interface";

export interface IFlickr {
  photos: IFlickrPhotos;
  stat: string;
}