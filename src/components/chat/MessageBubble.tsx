import React from 'react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  content: string;
  sender: 'user' | 'assistant';
  timestamp?: Date;
  className?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  sender,
  timestamp,
  className,
}) => {
  const isUser = sender === 'user';
  
  return (
    <div 
      className={cn(
        'max-w-[75%] px-4 py-3 rounded-lg', 
        isUser 
          ? 'bg-primary text-primary-foreground ml-auto rounded-tr-none' 
          : 'bg-secondary text-secondary-foreground rounded-tl-none',
        className
      )}
    >
      <div className="whitespace-pre-wrap break-words">{content}</div>
      
      {timestamp && (
        <div className={cn(
          'text-xs mt-1',
          isUser ? 'text-primary-foreground/70' : 'text-secondary-foreground/70'
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}
    </div>
  );
};

export default MessageBubble;