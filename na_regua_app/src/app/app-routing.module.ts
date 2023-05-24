import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'agen-barber',
    loadChildren: () => import('./agen-barber/agen-barber.module').then( m => m.AgenBarberPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'final-barb',
    loadChildren: () => import('./final-barb/final-barb.module').then( m => m.FinalBarbPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'selec-bab',
    loadChildren: () => import('./selec-bab/selec-bab.module').then( m => m.SelecBabPageModule)
  },
  {
    path: 'selec-barb',
    loadChildren: () => import('./selec-barb/selec-barb.module').then( m => m.SelecBarbPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
