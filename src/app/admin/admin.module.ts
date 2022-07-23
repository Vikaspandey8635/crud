import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditlistComponent } from './editlist/editlist.component';


@NgModule({
  declarations: [
    UserlistComponent,
    AdduserComponent,
    EditlistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
