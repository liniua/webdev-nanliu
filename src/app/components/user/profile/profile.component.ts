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

  userId: string;
  user: User;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    console.log(this.userId);

    this.user = this.userService.findUserById(this.userId);

  }

  logout() {
    this.router.navigate(['/login']);
  }
  //
  updateUser() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
    });
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
    this.userService.updateUser(this.userId, user);
    console.log(user);
    console.log(this.userId);
    console.log(this.userService.users);
  }
}
