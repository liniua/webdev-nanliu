import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  // properties
  username: string;
  password: string;
  vpassword: string;
  error: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register() {

    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.vpassword;

    if (this.password === this.vpassword) {
      const user = this.userService.createUser(new User( '', this.username, this.password, '', '', ''));
      if (user) {
        this.router.navigate(['/user', user._id]);
      }
    } else {

      this.error = 'Passwords do not match!';
    }
    // console.log(this.userService.users);

    // call user service only if passwords match else show the same error
    // if (this.password === this.vpassword) {
    //   this.userService.createUser()
    //     .subscribe(
    //       (data: any) => {
    //         this.router.navigate(['/profile']);
    //       },
    //       (error: any) => {
    //         console.log(error);
    //         this.error = error._body;
    //       }
    //     );
    // } else {
    //   this.error = 'Passwords do not match!';
    // }
  }

}
