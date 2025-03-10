import { getChatHistory } from "@/apis/chat.api";
import { CHAT_HISTORY_QUERY_KEY } from "@/constants/chat.constants";
import { useQuery } from "@tanstack/react-query";

export const useChatHistory = () => {
  return useQuery({
    queryKey: [CHAT_HISTORY_QUERY_KEY],
    queryFn: getChatHistory,
  });
};
