import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/model/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message!: Message;
  @Output() onEditMessage = new EventEmitter<Message>();
  @Output() onDeleteMessage = new EventEmitter<Message>();
  @Output() onReactToMessage = new EventEmitter<{ messageId: number; reaction: string }>();
  @Output() onReplyToMessage = new EventEmitter<{ messageId: number; replyText: string }>();

  isEditing: boolean = false;
  isReplying: boolean = false;
  editText: string = '';
  replyText: string = '';

  enableEdit() {
    this.isEditing = true;
    this.editText = this.message.text;
  }

  saveEdit() {
    this.onEditMessage.emit({ ...this.message, text: this.editText });
    this.isEditing = false;
  }

  delete() {
    this.onDeleteMessage.emit(this.message);
  }

  react(reaction: string) {
    this.onReactToMessage.emit({ messageId: this.message.id, reaction });
  }

  toggleReply() {
    this.isReplying = !this.isReplying;
  }

  sendReply() {
    this.onReplyToMessage.emit({ messageId: this.message.id, replyText: this.replyText });
    this.replyText = '';
    this.isReplying = false;
  }

}
