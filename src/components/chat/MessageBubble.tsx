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
        'max-w-[85%] sm:max-w-[75%] md:max-w-[70%] px-4 pb-2 pt-3 shadow-lg',
        isUser
          ? 'bg-indigo-600 text-white rounded-xl rounded-tr-none'
          : 'bg-zinc-800 text-zinc-100 border border-zinc-700 rounded-xl rounded-tl-none',
        className
      )}
    >
      <CardContent className="p-0">
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </CardContent>

      {timestamp && (
        <CardFooter
          className={cn(
            'pt-1 text-[10px] sm:text-xs justify-end',
            isUser ? 'text-white/70' : 'text-zinc-400'
          )}
        >
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </CardFooter>
      )}
    </Card>
  );
};

export default MessageBubble;