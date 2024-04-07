import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'current-weather',
    pathMatch: 'full',
  },
  {
    path: 'current-weather',
    loadChildren: () =>
      import('./pages/current-weather/current-weather.module').then(
        (m) => m.CurrentWeatherPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
