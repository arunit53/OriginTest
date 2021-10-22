import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadStrategy } from './preload-strategy.service'

const routes: Routes = [
  { path: 'todo',
  loadChildren: () => 
  import('src/todo/todo.module').then(m => m.TodoModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadStrategy,
      relativeLinkResolution:'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
