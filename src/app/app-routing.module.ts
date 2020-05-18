import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  { path: '', redirectTo: '/homeContent', pathMatch: 'full' },
  { path: 'homeContent', component: HomeContentComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
