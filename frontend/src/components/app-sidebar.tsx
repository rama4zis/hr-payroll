"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

import { HR_MENU } from "@/config/menu";
import { NavUser } from "@/components/nav-user";

const data = {
  user: {
    name: "Raja Iblis",
    email: "m@example.com",
    avatar: "/avatars/shaddn.jpg",
  },
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex gap-3 items-center">
              <Image src="/logo.png" alt="logo" width={45} height={45} />
              <span className="text-xl font-bold">BRAIN ROOT</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {HR_MENU.map((menuGroup) => (
          <SidebarGroup key={menuGroup.group}>
            <SidebarGroupLabel>{menuGroup.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuGroup.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
