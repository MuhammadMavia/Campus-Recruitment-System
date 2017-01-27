import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare let firebase: any;

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {
  user: any = {};
  constructor(public router: Router) {

  }

  createAccount() {
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(
      (data) => {
        console.log(data);
        delete this.user.password;
        this.user.id = data.uid;
        firebase.database().ref().child('students').child(data.uid).set(this.user);
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
