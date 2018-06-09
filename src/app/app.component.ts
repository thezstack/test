import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface UserResponse {
  login:string,
  bio:string,
  avatar_url:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get<UserResponse>('https://api.github.com/users/thezstack').subscribe(data => {
      console.log(data.login);
      console.log(data.bio);
      console.log(data.avatar_url);
    })
  }
}
