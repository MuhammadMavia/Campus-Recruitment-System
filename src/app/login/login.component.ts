import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare let firebase: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(public router: Router) {

  }

  doLogin() {
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(
      (data) => {
        localStorage.setItem('userID', data.uid);
        firebase.database().ref('students/' + data.uid).once('value', (userData) => {
          let user = userData.val();
          console.log(user);
          if (user) {
            localStorage.setItem('profile', JSON.stringify(user));
            this.router.navigate(['/students-dashboard']);
          }
          else {
            alert('wrong email or password');
          }
        });
      }, (err) => {
        alert(err.message);
      });
  }

  doCompanyLogin() {
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(
      (data) => {
        localStorage.setItem('userID', data.uid);
        firebase.database().ref('company/' + data.uid).once('value', (userData) => {
          let user = userData.val();
          console.log(user);
          if (user) {
            localStorage.setItem('profile', JSON.stringify(user));
            this.router.navigate(['/company-dashboard']);
          }
          else {
            alert('wrong email or password');
          }
        });
      }, (err) => {
        alert(err.message);
      });
  }

  ngOnInit() {
  }

}
