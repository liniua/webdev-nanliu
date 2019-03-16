import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;

  userId: String;
  user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      return this.userService.findUserById(params['uid']).subscribe(
        (user: User) => {
          console.log('This is: ' + user.username);
          this.userId = user._id;
          this.user = user;
          this.username = this.user.username;
        }
      );
    });
  }

  updateUser() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params['uid'];
    });
    console.log('new info: ' + this.profileForm.value);
    this.username = this.profileForm.value.username;
    this.email = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;

    const user = {_id: this.userId,
      username: this.username,
      password: '',
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email};

    console.log('new user: ' + user._id);
    console.log(user.username);
    console.log(user.email);
    console.log(user.firstName);
    console.log(user.lastName);
    this.userService.updateUser(user).subscribe(
        (new_user: any) => {
          this.user = new_user;
        }
      );
    // console.log(user);
    // console.log(this.userId);
    // console.log(this.userService.users);

    // this.activatedRouter.params.subscribe(params => {
    //   return this.userService.updateUser(user).subscribe(
    //     (new_user: any) => {
    //       this.user = new_user;
    //     }
    //   );
    // });
  }
}
