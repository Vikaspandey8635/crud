import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  items:any=[];
  id:any;

  
  constructor(private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("item"))
    this.items=JSON.parse(localStorage.getItem("item")!)
  }

  updateuser(){
    this.router.navigate(['/admin/editlist']);
  }
  
  deleteuser(id:number){
    this.items.splice(id,1)
  }
 

}
