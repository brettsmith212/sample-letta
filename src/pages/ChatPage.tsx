import React from 'react';
import { Button } from '../components/ui/button';

const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full p-4 bg-slate-100 border-2 border-blue-200">
      <h1 className="text-xl font-bold mb-4 text-center">Chat Interface</h1>
      
      {/* Message history will go here */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
        <div className="text-center text-gray-500 py-20">
          Message list will appear here (Step 2)
        </div>
      </div>
      
      {/* Input field will go here */}
      <div className="mt-4 flex gap-2 items-center">
        <input 
          type="text" 
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-md"
          disabled
        />
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default ChatPage;