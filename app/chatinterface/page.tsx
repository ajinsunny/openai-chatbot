"use client";

// ChatInterface component
import ChatLayout from "@/components/chat/chat-layout";
import { useChat } from "ai/react";
import React, { useState } from "react";

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

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
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                className="flex-grow p-2 border rounded focus:outline-none focus:border-indigo-300"
              />
              <button
                type="submit"
                className="ml-4 bg-indigo-600 text-white rounded px-4 py-2 focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
