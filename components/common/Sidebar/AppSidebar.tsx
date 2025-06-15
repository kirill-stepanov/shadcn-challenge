"use client";

import * as React from "react";
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import AppSidebarItem from "@/components/common/Sidebar/AppSidebarItem";
import AppSidebarSwitcher from "@/components/common/Sidebar/AppSidebarSwitcher";

import SettingsIcon from "@/assets/icons/SettingsIcon";
import PuzzleIcon from "@/assets/icons/PuzzleIcon";
import ChatIcon from "@/assets/icons/ChatIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import AutomationIcon from "@/assets/icons/AutomationIcon";
import UsersIcon from "@/assets/icons/UsersIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import AddIcon from "@/assets/icons/AddIcon";

const data = {
  teams: [
    {
      name: "Lorem ipsum",
      logo: GalleryVerticalEnd,
      plan: "Pro plan",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  menu: [
    {
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      name: "Chats",
      icon: <ChatIcon />,
      isActive: true,
      badgeCount: "32",
      submenu: [
        {
          name: "Central",
          isActive: true,
          badgeCount: "32",
          isCollapsed: true,
          submenu: [
            {
              name: "Unassigned",
              url: "#",
              badgeCount: "20",
            },
            {
              name: "Assigned to me",
              url: "#",
              badgeCount: "12",
            },
            {
              name: "Unread",
              url: "#",
              badgeCount: "32",
            },
            {
              name: "Trash",
              url: "#",
            },
          ],
        },
        {
          name: "Test inbox",
          isActive: false,
          badgeCount: "0",
          isCollapsed: true,
          submenu: [
            {
              name: "Unassigned",
              url: "#",
              badgeCount: "20",
            },
            {
              name: "Assigned to me",
              url: "#",
              badgeCount: "12",
            },
            {
              name: "Unread",
              url: "#",
              badgeCount: "32",
            },
            {
              name: "Trash",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      label: true,
      name: "Add new inbox",
      icon: <AddIcon color="var(--color-secondary)" />,
    },
    {
      name: "Automation",
      icon: <AutomationIcon />,
    },
    {
      name: "Contacts",
      icon: <UsersIcon />,
      isActive: false,
      isCollapsed: true,
      submenu: [
        {
          name: "Item 1",
          url: "#",
        },
        {
          name: "Item 2",
          url: "#",
        },
        {
          name: "Item 3",
          url: "#",
        },
      ],
    },
    {
      name: "Campaigns",
      icon: <ShareIcon />,
      isActive: false,
      isCollapsed: true,
      submenu: [
        {
          name: "Item 1",
          url: "#",
        },
        {
          name: "Item 2",
          url: "#",
        },
        {
          name: "Item 3",
          url: "#",
        },
      ],
    },
  ],
  footer: [
    {
      name: "Integrations",
      icon: <PuzzleIcon />,
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
    },
  ],
};

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="top-14 bg-sidebar-accent">
      <SidebarHeader>
        <AppSidebarSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <AppSidebarItem items={data.menu} />
      </SidebarContent>

      <SidebarFooter>
        <AppSidebarItem items={data.footer} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
