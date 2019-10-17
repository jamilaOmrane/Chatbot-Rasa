import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';


export class Message {
  constructor(public content: string, public from: string, public date: number) { }
}

export class Movie {
  constructor(public name: string, public posterUrl: string, public ratings: { Source: string, Value: string }, plot: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatUrl = "http://localhost:3000/conversations/default/respond";

  private omdbUrl(movie) {
    return `http://www.omdbapi.com/?t=${movie}&apikey=a7544c50`
  }

  public conversation = new BehaviorSubject<(Message | Movie[])[]>([]);
  constructor(private http: HttpClient) { }

  public async converse(msg) {
    this.update(msg, 'user')
    this.http.post(this.chatUrl, { query: msg }).toPromise<any>().then(res => {
      console.log(res)
      this.update(res['0'].text, 'bot');
    });

  }

  private update(msg, from) {
    console.log(new Message(msg, from, Date.now()))
    this.conversation.next([new Message(msg, from, Date.now())]);
  }

  public async fetchMovie(name) {
    const res = await fetch(this.omdbUrl(name)).then(res => res.json());
    const movie = new Movie(res.Title, res.Poster, res.Ratings, res.Plot);
    console.log(movie)
    return movie
  }
}
