import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  auther : any;
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.auther = this._auth.auther();

    
  }

  logOut() {
    if (this._auth.logOut()) {
      this._router.navigate(['/login']);
    }
  }

}
