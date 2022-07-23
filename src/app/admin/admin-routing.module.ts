import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EditlistComponent } from './editlist/editlist.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'userlist', component:UserlistComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'editlist', component:EditlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
