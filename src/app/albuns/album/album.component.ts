import { AlbumView } from './../album-view.model';
import { Photos } from './photos.model';
import { Component, Input, OnInit } from '@angular/core';
import { AlbunsService } from '../services/albuns.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() title: string = '';
 @Input() album: Photos[] | undefined;
 @Input() visibility: boolean = false;
  constructor(
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }


  goBack() {
    this.router.navigate(['/albuns']);
  }

}
