import { cookies } from "next/headers";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { createClient } from "@/lib/supabase/server";

async function ChatLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isCollapsed = cookieStore.get("sidebar:state")?.value !== "true";

  const supabase = await createClient();
  const { data: me } = await supabase.auth.getUser();
  // console.log("me =====>", me);

  return (
    <>
      {/* <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      /> */}
      <SidebarProvider defaultOpen={!isCollapsed}>
        <AppSidebar me={me?.user} />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default ChatLayout;
