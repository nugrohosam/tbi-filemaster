import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from './AppSidebar'
import { Button } from '@/components/ui/button'
import { Notification } from 'iconsax-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Layout({ children }) {
  return (
    <SidebarProvider className='w-[100%] h-[100%]'>
      <AppSidebar />
      <main className='w-[100%] h-[100%]'>
        <div className='flex justify-between bg-[#F3F6F9] w-[100%] py-[12px] px-[24px]'>
          <SidebarTrigger className='h-[24px] w-[24px]' />
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