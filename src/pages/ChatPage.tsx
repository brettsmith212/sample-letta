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
    <div className="flex flex-col h-screen w-full bg-slate-100">
      <h1 className="text-xl font-bold p-4 text-center border-b">Chat Interface</h1>
      
      <div className="flex-1 overflow-hidden">
        <MessageList messages={messages} />
      </div>
      
      <MessageInput 
        onSendMessage={handleSendMessage} 
        disabled={isProcessing}
      />
    </div>
  );
};

export default ChatPage;