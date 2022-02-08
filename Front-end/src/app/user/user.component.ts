import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from '../services/test.service';
import { User } from '../User';








var ELEMENT_DATA: User[];





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA)
  id = ""
  name = ""
  email = ""
  constructor(private testservice: TestService) { }


  ngOnInit(): void {
  }


  getData(){
    this.testservice.obtenerData(this.id,this.name, this.email).subscribe(response =>
      this.dataSource.data = response  as User[] )        }

    }
