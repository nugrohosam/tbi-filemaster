"use client"

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function NavMain({
  items
}) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item.title); // Set item aktif ke item yang diklik
    navigate(item.url); // Navigasi ke URL item
  };
  return (
    (<SidebarGroup>
      <SidebarGroupLabel className='bg-slate-200 h-[2px] my-[16px]'></SidebarGroupLabel>
      <SidebarMenu className='grid gap-[8px]'>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible ">
            
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}  className={`px-[24px] py-[6px] gap-[8px] h-[40px] text-[14px] font-semibold ${activeItem === item.title ? "bg-white" : ""}`} onClick={() => handleItemClick(item)}  >
                  {item.icon && <item.icon size={16} />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              
           
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>)
  );
}
