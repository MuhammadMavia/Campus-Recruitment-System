import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare let firebase: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {};
  constructor(public router: Router) {

  }

  createAccount() {
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(
      (data) => {
        console.log(data);
        delete this.user.password;
        this.user.id = data.uid;
        firebase.database().ref().child('company').child(data.uid).set(this.user);
        this.router.navigate(['/login']);
        this.user = {};
      }, (err) => {
        console.log(err);
        alert(err.message);
      });
  }

  ngOnInit() {
  }

}
