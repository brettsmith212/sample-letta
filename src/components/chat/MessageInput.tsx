import React, { useState, KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Textarea } from '../ui/textarea';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  disabled = false,
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
    <div className="flex items-end gap-3 p-4 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        disabled={disabled}
        className="flex-1 min-h-[72px] resize-none bg-zinc-800/90 border border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 font-medium text-[17px]" style={{ color: 'white' }}
      />
      <Button
        onClick={handleSendMessage}
        disabled={disabled || message.trim() === ''}
        variant="secondary"
        size="icon"
        className="h-[72px] w-[56px] rounded-md bg-indigo-600 hover:bg-indigo-500"
      >
        <PaperPlaneIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default MessageInput;