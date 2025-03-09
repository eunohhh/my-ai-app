import { getMe } from "@/apis/auth.api";
import { QUERY_KEY_ME } from "@/constants/auth.constants";
import { User } from "@supabase/supabase-js";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export const prefetchMe = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY_ME],
    queryFn: () => getMe(),
  });
  const me: User | undefined = await queryClient.getQueryData([QUERY_KEY_ME]);
  const dehydratedState = dehydrate(queryClient);

  return { me, dehydratedState };
};
