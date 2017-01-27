import {Component, OnInit} from '@angular/core';

declare let firebase: any;

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  post: any = {};
  students: any = [];
  userData: any = JSON.parse(localStorage.getItem('profile'));

  constructor() {
    this.loadStudents();
  }

  createPost() {
    this.post.companyID = this.userData.id;
    this.post.companyEmail = this.userData.email;
    this.post.time = firebase.database['ServerValue']['TIMESTAMP'];
    firebase.database().ref().child('posts').push(this.post);
  }

  loadStudents() {
    firebase.database().ref().child('students').on('child_added', (s) => {
      let stu = s.val();
      stu.id = s.key;
      console.log(stu);
      this.students.unshift(stu);
    });
  }

  ngOnInit() {
  }

}
