import React, { useState, useEffect } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button'
import { Notification, HambergerMenu } from 'iconsax-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state berdasarkan ukuran layar
    };

    window.addEventListener("resize", handleResize); // Menambahkan event listener untuk resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener saat komponen unmount
    };
  }, []);
  return (
    <SidebarProvider className='w-[100%] h-[100%]'>
      <AppSidebar />
      <main className='w-[100%] h-[100%]'>
        <div className='flex justify-between lg:justify-end bg-[#F3F6F9] w-[100%] py-[12px] px-[24px]'>
          {isMobile && (
            <SidebarTrigger className='h-[24px] w-[24px]'>
              <HambergerMenu
                size="32"
                variant="Outline"
              />
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
  )
}