export interface Message {
    id: number;
    text: string;
    author: string;
    timestamp: Date;
    replies: Message[];
    reactions: { [reaction: string]: number };
    edited: boolean;
  }
  