import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  user = {};
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = params['user'];
          this.userId = params['userId'];
          this.username = params['username'];
          this.firstName = params['firstName'];
          this.lastName = params['lastName'];
          this.email = params['email'];
        }
      );

    // this.user = this.userService.findUserById(this.userId);

  }

  logout() {
  //   this.userService.logout()
  //     .subscribe(
  //       (data: any) => this.activatedRoute.navigate(['/login'])
  //     );
  }
  //
  updateUser() {
  //   this.activatedRoute.params.subscribe(params => {
  //
  //     this.user = params['user'];
  //     this.userId = params['userId'];
  //   });
  //
  //   this.userService.updateUser(this.userId, this.user);
  //   console.log(this.user);
  //   console.log(this.userId);
  //   console.log(this.userService.users);
  }
}
