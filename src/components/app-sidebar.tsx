"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    // avatar: "/avatars/shadcn.jpg",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Claims",
      href: "/claims",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      href: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      href: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      href: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      href: "#",
      items: [
        {
          title: "Active Proposals",
          href: "#",
        },
        {
          title: "Archived",
          href: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      href: "#",
      items: [
        {
          title: "Active Proposals",
          href: "#",
        },
        {
          title: "Archived",
          href: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      href: "#",
      items: [
        {
          title: "Active Proposals",
          href: "#",
        },
        {
          title: "Archived",
          href: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      href: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      href: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      href: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      href: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      href: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      href: "#",
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
