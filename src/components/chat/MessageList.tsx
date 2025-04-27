import React from 'react';
import MessageBubble from './MessageBubble';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex flex-col gap-3 py-4">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center py-10 text-zinc-500">
          <p className="text-base">No messages yet. Start the conversation!</p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <MessageBubble
              content={message.content}
              sender={message.sender}
              timestamp={message.timestamp}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;