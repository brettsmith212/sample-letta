import React, { useState, KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Textarea } from "../ui/textarea";

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

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-end gap-2 sm:gap-3 p-3 sm:p-4 h-full bg-zinc-900 border border-blue-900/50 rounded-lg">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        disabled={disabled}
        className="flex-1 min-h-[80px] resize-none text-sm sm:text-base bg-zinc-800 border-2 border-blue-700 rounded-md text-white focus-visible:ring-blue-500 focus-visible:border-blue-500"
      />
      <Button 
        onClick={handleSendMessage} 
        disabled={disabled || message.trim() === ''}
        variant="default"
        size="icon"
        className="h-[80px] w-[56px] rounded-md bg-blue-600 hover:bg-blue-500"
        style={{ minHeight: '80px' }}
      >
        <PaperPlaneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    </div>
  );
};

export default MessageInput;