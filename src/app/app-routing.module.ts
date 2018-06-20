import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseriComponent } from './useri/useri.component';
import { DetaliiComponent } from './detalii/detalii.component';
import { PostariComponent } from './postari/postari.component';



const routes: Routes = [
 { 
   path: '',
   component: UseriComponent
  },
  { 
    path: 'detalii/:id',
    component: DetaliiComponent
   },
   { 
     path: 'postari',
     component: PostariComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
