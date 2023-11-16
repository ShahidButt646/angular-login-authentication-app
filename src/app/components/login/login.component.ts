import { Component } from '@angular/core';

import { AuthForm } from 'src/app/models/auth-form';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoginForm: boolean = true;
  userAuthForm: AuthForm = new AuthForm();
  constructor(public loginService: LoginService) {}

  setIsLoginForm(flag: boolean): void {
    this.isLoginForm = flag;
  }
  handleSubmission(): boolean {
    if (this.isLoginForm) {
      this.loginService.login(this.userAuthForm).subscribe(
        (d) => {
          console.log('from ts file', d);
          this.userAuthForm.userName = '';
          this.userAuthForm.password = '';
          alert('logged in successfully');
        },
        (error) => {
          alert('Invalid login | for error see console');
          console.log(error);
        }
      );
    } else {
      this.loginService.signUp(this.userAuthForm).subscribe(
        (d) => {
          this.userAuthForm.firstName = '';
          this.userAuthForm.lastName = '';
          this.userAuthForm.userName = '';
          this.userAuthForm.password = '';
          alert('user added successfully');
        },
        (error) => {
          alert('signup failed | for error see console');
          console.log(error);
        }
      );
    }

    return false;
  }
}
