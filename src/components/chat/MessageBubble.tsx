import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
    <Card 
      className={cn(
        'max-w-[85%] sm:max-w-[75%] md:max-w-[70%] border-0 shadow-md text-sm sm:text-base p-0', 
        isUser 
          ? 'bg-blue-500 !text-white ml-auto rounded-tr-none' 
          : 'bg-blue-800 !text-white rounded-tl-none border border-blue-700',
        className
      )}
      style={{ backgroundColor: isUser ? '#3b82f6' : '#1e40af' }}
    >
      <CardContent className="!p-0" style={{ padding: '16px 20px' }}>
        <div className="whitespace-pre-wrap break-words overflow-auto">
          {content}
        </div>
      </CardContent>
      
      {timestamp && (
        <CardFooter className={cn(
          '!p-0 text-[10px] sm:text-xs flex justify-end',
          isUser ? 'text-white/70' : 'text-white/60'
        )} style={{ padding: '4px 20px 12px' }}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </CardFooter>
      )}
    </Card>
  );
};

export default MessageBubble;