import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
 {
  path:'admin' , loadChildren:()=>import("./admin/admin.module").then(mod=>AdminModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
