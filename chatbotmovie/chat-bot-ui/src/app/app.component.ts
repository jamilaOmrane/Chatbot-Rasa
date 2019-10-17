import { Component, OnInit } from '@angular/core';
import { ChatService, Message, Movie } from './chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Chatbot Example'
  private messages: Observable<(Message | Movie[])[]>;
  private input: string;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .pipe(scan((acc, val) => acc.concat(val)))
  }

  sendMessageBis() {
    if (this.input.length > 0) {
      // if (this.input.substr(0, 4) === 'show') {
      //   console.log(this.input.substring(4));
      //   this.chat.converse(this.input, this.input.substring(4));
      //   this.input = '';
      // } else {
        this.chat.converse(this.input);
        this.input = '';
      //}

    }
  }
  sendMessage(){
    this.chat.converse(this.input);
    this.input = '';
  }

}
