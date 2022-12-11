import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Pages/user/user';
import { UserService } from '../service/user.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
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
        username: new FormControl(user.nomE, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),

        lastName: new FormControl(user.prenomE, [Validators.minLength(3)]),

        password: new FormControl(user.password, [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        option: new FormControl(user.option)
      })

    })



  }





  saveUser() {


    this.user.nomE = this.myForm?.controls['autres'].get('username')?.value;
    this.user.prenomE = this.myForm?.controls['autres'].get('lastName')?.value;
    this.user.password = this.myForm?.controls['autres'].get('password')?.value;
    this.user.email = this.myForm?.controls['autres'].get('email')?.value;
    this.user.option = this.myForm?.controls['autres'].get('option')?.value;
    //this.list.push(this.user);
    // console.log(this.list);
    //this.user.idCustomer=100;
    //this.user.password="";
    //this.user.picture="";

    this.us.register(this.user).subscribe(res => {
      console.log(res.status)
      this.router.navigate(['/home']);
    });


    this.myForm.reset();
  }
}
