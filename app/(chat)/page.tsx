"use client";

import { useAuth } from "@/hooks/auth.hook";

function ChatPage() {
  const { me } = useAuth();

  return <div>ChatPage</div>;
}

export default ChatPage;
