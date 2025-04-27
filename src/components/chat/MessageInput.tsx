import React, { useState, KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { PaperPlaneIcon } from '@radix-ui/react-icons';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage,
  disabled = false 
}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    onSendMessage(message);
    setMessage('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 h-full">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        disabled={disabled}
        className="flex-1 py-2 px-3 h-10 sm:h-12 text-sm sm:text-base bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <Button 
        onClick={handleSendMessage} 
        disabled={disabled || message.trim() === ''}
        variant="default"
        size="icon"
        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
      >
        <PaperPlaneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
};

export default MessageInput;