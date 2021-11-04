import { Photos } from './../album/photos.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Album } from '../album.model';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlbunsService {
  baseUrl = "https://jsonplaceholder.typicode.com/albums"
  baseUrlPhotos = "https://jsonplaceholder.typicode.com/photos"

  constructor(private httpClient: HttpClient) {
   }
  httpOptions = {
    headers: new HttpHeaders({'Contet-Type': 'application/json'})
  }
  getAlbuns(): Observable<Album[]> {
    return (this.httpClient.get<Album[]>(this.baseUrl)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ))
  }
  getPhotos(): Observable<Photos[]>{
    return (this.httpClient.get<Photos[]>(this.baseUrlPhotos)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
