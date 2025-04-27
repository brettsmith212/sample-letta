import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// Mock data for initial messages
const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 20) // 20 minutes ago
  },
  {
    id: '2',
    content: 'I need help with my project. Can you explain how to implement a chat interface?',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 19) // 19 minutes ago
  },
  {
    id: '3',
    content: 'Certainly! Creating a chat interface involves several components: a message display area, message bubbles, and an input field with a send button. Would you like me to explain how to implement each part?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 18) // 18 minutes ago
  },
  {
    id: '4',
    content: 'That would be great! Please focus on the React components I need.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 17) // 17 minutes ago
  },
  {
    id: '5',
    content: 'For a React-based chat interface, you need:\n1. A MessageList component to display all messages\n2. A MessageBubble component for each individual message\n3. A MessageInput component with a text field and send button\n4. A parent component to manage state and coordinate these parts\n\nWould you like me to provide some sample code?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 16) // 16 minutes ago
  }
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Initialize with mock data on component mount
  useEffect(() => {
    setMessages(mockMessages);
  }, []);
  
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
    <div className="grid grid-rows-[auto_8fr_2fr] h-[100dvh] w-full bg-zinc-900 text-white dark">
      <header className="border-b border-zinc-700 sticky top-0 z-10 bg-zinc-900">
        <h1 className="text-base sm:text-lg md:text-xl font-bold py-2 sm:py-2.5 text-center">Chat Interface</h1>
      </header>
      
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto w-full px-2 sm:px-4 md:px-6">
          <MessageList messages={messages} />
        </div>
      </div>
      
      <div className="border-t border-zinc-700 bg-zinc-900 sticky bottom-0 z-10">
        <div className="max-w-3xl mx-auto w-full">
          <MessageInput 
            onSendMessage={handleSendMessage} 
            disabled={isProcessing}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;