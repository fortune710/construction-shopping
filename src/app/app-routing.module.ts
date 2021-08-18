import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tab-pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'main/home',
    loadChildren: () => import('./tab-pages/home-tab/home-tab.module').then(m => m.HomeTabPageModule)
  },
  {
    path: 'main/profile/settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },


  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
