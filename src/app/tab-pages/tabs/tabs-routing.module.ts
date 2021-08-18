import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-tab/home-tab.module').then( m => m.HomeTabPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help-tab/help-tab.module').then( m => m.HelpTabPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories-tab/categories-tab.module').then( m => m.CategoriesTabPageModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
