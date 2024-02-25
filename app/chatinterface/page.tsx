"use-client";

import { ChatLayout } from "@/components/chat/chat-layout";
import { cookies } from "next/headers";

export default function ChatInterface() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  return (
    <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}
