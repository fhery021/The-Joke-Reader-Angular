import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DataResponse {
  id: number;
  joke: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showComments = false;
  btnTextShowComments = 'Comments';
  btnTextHideComments = 'Hide Comments';
  btnCommentsText: string = this.btnTextShowComments;

  public jokes: DataResponse[] = [];

  // TODO log in feature
  loggedIn = true;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://192.168.1.7:8080/jokes/getRandomJokes/25')
    .subscribe(data =>{
      for(var i=0; i<25; i++){
        this.jokes.push(data[i] as DataResponse);
      }
    });
  }

  toggle(): void {
    if (this.showComments) {
      this.btnCommentsText = this.btnTextHideComments;
      this.showComments = false;
    } else {
      this.btnCommentsText = this.btnTextShowComments;
      this.showComments = true;
    }
  }

}
