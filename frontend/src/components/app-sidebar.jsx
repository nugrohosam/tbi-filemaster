import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Home2, FolderOpen, UserOctagon } from 'iconsax-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "TBI File Master",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
   
  ],
}
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
const items1 = [
  {
      title: "Manajemen Pengguna",
      url: "/panel/dashboard",
      icon: UserOctagon,
  },
  
]

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props} >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
        <NavMain items={items1} />
      </SidebarContent>
    </Sidebar>)
  );
}
