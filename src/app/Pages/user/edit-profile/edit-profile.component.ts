import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User = new User();
  id: number;
  password: any;
  confirm: any;

  constructor(private us: UserService, private router: Router) { }



  ngOnInit(): void {

    this.user = JSON.parse(this.us.getUser());
    this.id = this.user.idEtudiant;
    console.log(this.user)
  }


  updateUser(f) {

    this.user.password = this.password;


    //this.list.push(this.user);
    // console.log(this.list);
    //this.user.idCustomer=100;
    //this.user.password="";
    //this.user.picture="";
    if (this.password == this.confirm) {
      console.log('ok')
      console.log(this.user)

      this.us.updateUser(this.user).subscribe(res => {
        console.log(this.user)
        this.user = res
        localStorage.setItem('user', JSON.stringify(this.user))
        Swal.fire('Votre demande a été crée en succées!', '', 'success')
        this.router.navigate(['/home']);
      });

    }



  }

}