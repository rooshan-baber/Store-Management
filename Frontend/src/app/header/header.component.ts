import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  })
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private userdata: UserdataService) { }

  ngOnInit(): void {
  }

  Navigate(path:string){
    this.router.navigate([path]);
  }

  logout(){
    this.userdata.clearToken();
    this.router.navigate(['/login']);
  }
}
