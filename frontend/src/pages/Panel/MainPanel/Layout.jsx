import React, { useState, useEffect, createContext } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/app-sidebar';
import { Notification, HambergerMenu } from 'iconsax-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const VisibilityContext = createContext();

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isFolderVisible, setIsFolderVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <VisibilityContext.Provider value={{ isFolderVisible, setIsFolderVisible }}>
      <SidebarProvider className='w-[100%] h-[100%]'>
        <AppSidebar />
        <main className='w-[100%] h-[100%]'>
          <div className='flex justify-between lg:justify-end bg-[#F3F6F9] w-[100%] py-[12px] px-[24px]'>
            {isMobile && (
              <SidebarTrigger className='h-[24px] w-[24px]'>
                <HambergerMenu size="32" variant="Outline" />
              </SidebarTrigger>
            )}
            <div className='flex gap-3 items-center'>
              <Notification size={24} />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {children}
        </main>
      </SidebarProvider>
    </VisibilityContext.Provider>
  );
}
