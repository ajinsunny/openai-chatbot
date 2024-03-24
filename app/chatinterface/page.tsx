"use client";

// ChatInterface component
import ChatLayout from "@/components/chat/chat-layout";
import { cookies } from "next/headers";
import React, { useState } from "react";

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return; // Prevent sending empty messages
    setMessages([...messages, { id: messages.length + 1, text: inputValue }]);
    setInputValue(""); // Clear input field after sending
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col max-w-4xl w-full lg:max-w-5xl h-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-indigo-600 text-white text-lg font-semibold p-4 flex justify-between items-center">
          <span>Chat</span>
        </div>
        <div className="flex-grow overflow-auto">
          <ChatLayout messages={messages} />
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow p-2 border rounded focus:outline-none focus:border-indigo-300"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-indigo-600 text-white rounded px-4 py-2 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
