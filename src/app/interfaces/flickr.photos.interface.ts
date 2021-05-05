import { IFlickrPhoto } from "./flickr.photo.interface";

export interface IFlickrPhotos {
  page: number;
  pages: number;
  perpage: number;
  photo: IFlickrPhoto[];
  total: string;
}