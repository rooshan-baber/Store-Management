import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { zoomIn } from './animations';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[zoomIn]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private authService: UserdataService) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      console.log('Retrieved Token:', token);
      this.authService.authToken = token;
    }
  }
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
