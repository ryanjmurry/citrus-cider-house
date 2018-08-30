import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CiderComponent } from './components/cider/cider.component';
import { JukeboxComponent } from './components/jukebox/jukebox.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ciders',
    component: CiderComponent
  },
  {
    path: 'jukebox',
    component: JukeboxComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'lemonparty',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
