import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from 'src/chat/chat.component';
import { MessageComponent } from 'src/message/message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [		
    AppComponent,
      ChatComponent,
      MessageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
