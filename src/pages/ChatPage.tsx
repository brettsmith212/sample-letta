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
    timestamp: new Date(Date.now() - 1000 * 60 * 20)
  },
  {
    id: '2',
    content: 'I need help with my project. Can you explain how to implement a chat interface?',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 19)
  },
  {
    id: '3',
    content: 'Certainly! Creating a chat interface involves several components: a message display area, message bubbles, and an input field with a send button. Would you like me to explain how to implement each part?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 18)
  },
  {
    id: '4',
    content: 'That would be great! Please focus on the React components I need.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 17)
  },
  {
    id: '5',
    content: 'For a React-based chat interface, you need:\n1. A MessageList component to display all messages\n2. A MessageBubble component for each individual message\n3. A MessageInput component with a text field and send button\n4. A parent component to manage state and coordinate these parts\n\nWould you like me to provide some sample code?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 16)
  }
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    setIsProcessing(true);
    setTimeout(() => {
      const assistantMessage: Message = {
        id: uuidv4(),
        content: `I received: "${content}". This is a simulated response.`,
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="flex h-[100dvh] flex-col bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-foreground">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-900/70 backdrop-blur-md">
        <h1 className="py-3 text-center text-lg font-bold sm:text-xl">
          Chat Interface
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4">
          <MessageList messages={messages} />
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900/70">
        <div className="mx-auto w-full max-w-3xl">
          <MessageInput
            onSendMessage={handleSendMessage}
            disabled={isProcessing}
          />
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;