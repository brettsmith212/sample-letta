import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Simulate assistant response after a delay
    setIsProcessing(true);
    setTimeout(() => {
      const assistantMessage: Message = {
        id: uuidv4(),
        content: `I received: "${content}". This is a simulated response.`,
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
      setIsProcessing(false);
    }, 1000);
  };
  
  return (
    <div className="grid grid-rows-[auto_8fr_2fr] h-screen w-full bg-zinc-900 text-white dark">
      <header className="border-b border-zinc-700">
        <h1 className="text-lg font-bold py-1.5 text-center">Chat Interface</h1>
      </header>
      
      <div className="overflow-auto">
        <MessageList messages={messages} />
      </div>
      
      <div className="border-t border-zinc-700 bg-zinc-900">
        <MessageInput 
          onSendMessage={handleSendMessage} 
          disabled={isProcessing}
        />
      </div>
    </div>
  );
};

export default ChatPage;