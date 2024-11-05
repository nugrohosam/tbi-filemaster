import React from 'react'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar"

import Logo from '../../../assets/logo.jpg'
import { Home2, FolderOpen, UserOctagon } from 'iconsax-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/panel/dashboard",
        icon: Home2,
    },
    {
        title: "Proyek",
        url: "/panel/proyek",
        icon: FolderOpen,
    },
]


const AppSidebar = () => {
    const navigate = useNavigate();
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className='px-[24px] flex items-center gap-[8px]'>
                            <img src={Logo} alt="logo" className='w-[30px] h-[32.14px]' />
                            <h1 className='text-[20px] font-bold'>TBI File Master</h1>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <div className='border my-[2px] mx-[16px]'></div>
            <SidebarContent >
                <SidebarGroup className='px-[16px]'>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild className='h-[44px] text-[14px] text-[#717179] font-semibold py-[6px] px-[12px]'>
                                        <Link to={item.url}>
                                            <item.icon  size="24"/>
                                            <p>{item.title}</p>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <div className='border my-[2px] mx-[16px]'></div>
                <SidebarGroup className='px-[16px]'>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            
                                <SidebarMenuItem  >
                                    <SidebarMenuButton asChild className='h-[44px] text-[14px] text-[#717179] font-semibold py-[6px] px-[12px]'>
                                        <Link to='/panel/proyek/detail'>
                                            <UserOctagon  size="24"/>
                                            <p>Manajemen Pengguna</p>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                           
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
