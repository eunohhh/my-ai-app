import { generateUUID } from "@/lib/utils";
import { cookies } from "next/headers";


async function ChatPage() {
  const id = generateUUID();

  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get('chat-model');

  return <div>ChatPage</div>;
}

export default ChatPage;
