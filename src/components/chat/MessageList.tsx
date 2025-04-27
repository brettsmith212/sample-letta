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
    <div className="flex flex-col space-y-2 sm:space-y-3 py-2 sm:py-3">
      {messages.length === 0 ? (
        <div className="text-center text-zinc-500 py-6 sm:py-10 flex items-center justify-center h-full">
          <p className="text-sm sm:text-base">No messages yet. Start the conversation!</p>
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