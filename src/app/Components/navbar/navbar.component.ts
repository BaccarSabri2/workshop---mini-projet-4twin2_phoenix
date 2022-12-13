import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Pages/user/service/user.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(private us: UserService, private router: Router) { }
  test: boolean=false;
  ngOnInit(): void {



   this.test= this.us.isAuthenticated();
   console.log(this.us.isAuthenticated)



  }

  signOut() {
    this.us.signOut()
    this.router.navigate(['/user/login']);
    this.test = false;
  }


}
