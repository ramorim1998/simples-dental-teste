import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from '../albuns/album/album.component';
import { AlbunsComponent } from '../albuns/albuns.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'albuns', component: AlbunsComponent },
  { path: 'album', component: AlbumComponent },
  {path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
