export const productionRoutes = [
  { path: '', redirectTo: 'vagas', pathMatch: 'full' },
  {
    path: 'vagas',
    loadChildren: () => import('./modules/vaga/vagas.module').then(module => module.VagasModule),
  },
  {
    path: 'erro',
    loadChildren: () => import('./modules/erro/erro.module').then(module => module.ErroModule),
  },
];
