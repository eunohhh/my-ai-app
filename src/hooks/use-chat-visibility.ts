"use client";

import { updateChatVisibility } from "@/(chat)/actions";
import { VisibilityType } from "@/components/visibility-selector";
import { Chat } from "@/types/db.type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useChatHistory } from "./chat.hook";

export function useChatVisibility({
  chatId,
  initialVisibility,
}: {
  chatId: string;
  initialVisibility: VisibilityType;
}) {
  const { data: history } = useChatHistory();
  const queryClient = useQueryClient();

  const { data: localVisibility } = useQuery({
    queryKey: [`${chatId}-visibility`],
    queryFn: () => initialVisibility,
    initialData: initialVisibility,
  });

  const visibilityType = useMemo(() => {
    if (!history) return localVisibility;
    const chat = history.find((chat) => chat.id === chatId);
    if (!chat) return "private";
    return chat.visibility;
  }, [history, chatId, localVisibility]);

  const setVisibilityType = (updatedVisibilityType: VisibilityType) => {
    queryClient.setQueryData([`${chatId}-visibility`], updatedVisibilityType);

    queryClient.setQueryData<Array<Chat>>(["/api/history"], (oldHistory) => {
      return oldHistory
        ? oldHistory.map((chat) => {
            if (chat.id === chatId) {
              return {
                ...chat,
                visibility: updatedVisibilityType,
              };
            }
            return chat;
          })
        : [];
    });

    updateChatVisibility({
      chatId: chatId,
      visibility: updatedVisibilityType,
    });
  };

  return { visibilityType, setVisibilityType };
}
