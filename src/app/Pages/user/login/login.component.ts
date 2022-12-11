import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  user: User = new User();
  constructor(private us: UserService, private router: Router) {
    // this.createForm(this.user);
  }

  ngOnInit(): void {
    this.createForm(new User());
  }


  createForm(user: User) {
    this.myForm = new FormGroup({
      autres: new FormGroup({

        email: new FormControl(user.email, [Validators.required, Validators.minLength(5), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),



        password: new FormControl(user.password, [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),

      })


    })
  }





  login() {



    this.user.password = this.myForm?.controls['autres'].get('password')?.value;
    this.user.email = this.myForm?.controls['autres'].get('email')?.value;

    //this.list.push(this.user);
    // console.log(this.list);
    //this.user.idCustomer=100;
    //this.user.password="";
    //this.user.picture="";
    console.log(this.user)
    this.us.login(this.user.email, this.user.password).subscribe(res => {
      console.log(res)
      localStorage.setItem('user', JSON.stringify(res.etudiant) )
    this.router.navigate(['/home']);
    });


    this.myForm.reset();
  }
}
