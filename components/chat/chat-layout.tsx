"use client";
// ChatLayout component
import React from "react";

type ChatMessageProps = {
  message: string;
};

const ChatMessage = ({ message }: ChatMessageProps) => (
  <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
    {message}
  </div>
);

type ChatLayoutProps = {
  messages: { id: number; text: string }[];
};

const ChatLayout = ({ messages }: ChatLayoutProps) => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <div
        style={{ marginBottom: "20px", maxHeight: "400px", overflowY: "auto" }}
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} />
        ))}
      </div>
    </div>
  );
};

export default ChatLayout;
