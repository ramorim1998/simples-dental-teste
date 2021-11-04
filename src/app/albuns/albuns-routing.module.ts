import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbunsComponent } from './albuns.component';

const albunsRoute: Routes = [
  {path: 'albuns', component: AlbunsComponent},
  {path: 'album/:id', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forChild(albunsRoute)],
  exports: [RouterModule]
})
export class AlbunsRoutingModule { }
