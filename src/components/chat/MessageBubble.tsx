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
        'max-w-[85%] sm:max-w-[75%] md:max-w-[70%] px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base', 
        isUser 
          ? 'bg-purple-600 text-white ml-auto rounded-tr-none' 
          : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700',
        className
      )}
    >
      <div className="whitespace-pre-wrap break-words">{content}</div>
      
      {timestamp && (
        <div className={cn(
          'text-[10px] sm:text-xs mt-1',
          isUser ? 'text-white/70' : 'text-zinc-400'
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}
    </div>
  );
};

export default MessageBubble;