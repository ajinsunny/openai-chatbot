// ChatLayout component
import React from "react";

// Assuming Message has a similar structure to what useChat provides
// In ChatLayout component

type Message = {
  role: "function" | "data" | "user" | "system" | "assistant" | "tool";
  content: string;
};

type ChatLayoutProps = {
  messages: Message[];
};

const ChatLayout: React.FC<ChatLayoutProps> = ({ messages }) => {
  return (
    <div className="flex flex-col overflow-auto p-4">
      <ul>
        {messages.map((m, index) => (
          <li
            key={index}
            className={`${m.role === "user" ? "text-right" : "text-left"} my-2`}
          >
            <span className="font-semibold">
              {m.role === "user" ? "You: " : "AI: "}
            </span>
            {m.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatLayout;
