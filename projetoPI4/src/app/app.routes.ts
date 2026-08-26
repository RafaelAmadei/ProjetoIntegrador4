import { Routes } from '@angular/router';
import { LivrosRoutingModule } from './livros/livros-routing-module';

export const 

routes: Routes = [
{
    path: "livros",
    loadChildren: () => import('./livros/livros-routing-module').then(m => LivrosRoutingModule)
}

];
