import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CiderComponent } from './components/cider/cider.component';
import { CiderCreateComponent } from './components/cider/cider-create/cider-create.component';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';
import { MenuComponent } from './components/menu/menu.component';

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
    path: 'ciders/add',
    component: CiderCreateComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'menu/add',
    component: MenuCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
