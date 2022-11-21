import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => 
      {
        (isLoggedIn && this.authService.user.role=='admin') && router.navigate(['/admin']);
        (isLoggedIn && this.authService.user.role=='user') && router.navigate(['/admin'])
      } )
   }

  ngOnInit(): void {
  }
  login(){
    this.authService.login("m@m.tn","00000000").subscribe((data) => this.router.navigate(['/admin/dashboard']),
    err => console.log(err))
  }

}
