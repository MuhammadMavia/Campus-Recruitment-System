import {Component, OnInit} from '@angular/core';
declare let firebase: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  profiles: any = [];
  userData: any = JSON.parse(localStorage.getItem('profile'));

  constructor() {
    this.loadProfile();
  }

  loadProfile() {
    firebase.database().ref().child('profile').child(this.userData.id).on('child_added', (p) => {
      let profile = p.val();
      profile.id = p.key;
      console.log(profile);
      this.profiles.unshift(profile);
    });
  }

  createProfile() {
    firebase.database().ref().child('profile').child(this.userData.id).push(this.profile);
  }

  removeProfile(p, i) {
    console.log(p);
    firebase.database().ref().child('profile').child(this.userData.id).child(p.id).set(null);
    this.profiles.splice(i, 1);
  }

  ngOnInit() {
  }

}
