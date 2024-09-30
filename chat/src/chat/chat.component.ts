import { Component, OnInit } from '@angular/core';
import { Message } from 'src/model/Message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent{

  messages: Message[] = [];
  newMessage: string = '';

  constructor() {
    // Initialize with some dummy data
    this.messages = [
      {
        id: 1,
        text: "Hello! How's it going?",
        author: 'User1',
        timestamp: new Date(),
        replies: [],
        reactions: { like: 0, love: 0 },
        edited: false,
      },
      {
        id: 2,
        text: "Hey! I'm doing well, how about you?",
        author: 'User2',
        timestamp: new Date(),
        replies: [],
        reactions: { like: 1, love: 0 },
        edited: false,
      },
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const newMsg: Message = {
        id: this.messages.length + 1,
        text: this.newMessage,
        author: 'You',
        timestamp: new Date(),
        replies: [],
        reactions: { like: 0, love: 0 },
        edited: false,
      };
      this.messages.push(newMsg);
      this.newMessage = '';
    }
  }

  editMessage(message: Message) {
    const msgIndex = this.messages.findIndex((msg) => msg.id === message.id);
    if (msgIndex > -1) {
      this.messages[msgIndex] = { ...message, edited: true };
    }
  }

  deleteMessage(message: Message) {
    this.messages = this.messages.filter((msg) => msg.id !== message.id);
  }

  reactToMessage({ messageId, reaction }: { messageId: number; reaction: string }) {
    const msgIndex = this.messages.findIndex((msg) => msg.id === messageId);
    if (msgIndex > -1) {
      const message = this.messages[msgIndex];
      message.reactions[reaction] = (message.reactions[reaction] || 0) + 1;
    }
  }

  replyToMessage({ messageId, replyText }: { messageId: number; replyText: string }) {
    const msgIndex = this.messages.findIndex((msg) => msg.id === messageId);
    if (msgIndex > -1 && replyText.trim()) {
      const reply: Message = {
        id: this.messages.length + 1,
        text: replyText,
        author: 'You',
        timestamp: new Date(),
        replies: [],
        reactions: { like: 0, love: 0 },
        edited: false,
      };
      this.messages[msgIndex].replies.push(reply);
    }
  }

}
