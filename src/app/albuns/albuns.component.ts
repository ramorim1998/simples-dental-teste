import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Album } from './album.model';
import { AlbunsService } from './services/albuns.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Photos } from './album/photos.model';
import { AlbumView } from './album-view.model';



@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {
  albuns: Album[] = [];
  photos: Photos[] = [];
  object: AlbumView | undefined;
  albunsView: AlbumView[] = [];
  length = this.albuns.length;
  visibility: boolean = false;
  pageSize = 5;
  pagesizeOptions: number[] = [5, 10, 25];
  public albumSlice: AlbumView[] = [];
  constructor(private albunsService: AlbunsService, private router: Router) { }

  ngOnInit(): void {
    this.getAlbuns();
    this.getPhotos();
  }

  getAlbuns() {
    this.albunsService.getAlbuns().subscribe((albuns: Album[]) => { this.albuns = albuns;});
  }
  getPhotos() {
    this.albunsService.getPhotos().subscribe((photos: Photos[]) => { this.photos = photos; this.getAlbumView();
    });
  }
  public onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.albuns.length) {
      endIndex = this.albuns.length;
    }
    this.albumSlice = this.albunsView.slice(startIndex, endIndex);
  }
  getAlbumView() {
    let albux: Photos[] = []
    this.albuns.forEach(albuns => {
      
      this.photos.forEach(photos => {
        if (photos.albumId == albuns.id) {
          albux.push({
              albumId: photos.albumId,
              id: photos.id ,
              title: photos.title,
              url: photos.url,
              thumbnailUrl: photos.thumbnailUrl
            })
          
          }
        })
        this.object = {
          userId: albuns.userId,
          id: albuns.id,
          title:albuns.title,
          visibility: false,
          photos: albux
        };
        this.albunsView.push(this.object);
        albux = []
    });
    this.albumSlice = this.albunsView.slice(0, 5)
  }

  setVisibility(album: AlbumView) {
    album.visibility = !album.visibility;
  }
  
}
