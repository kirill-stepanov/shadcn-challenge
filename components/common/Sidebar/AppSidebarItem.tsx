"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import ArrowDown from "@/assets/icons/ArrowDown";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

export interface SidebarItem {
  name: string;
  url?: string;
  icon?: React.JSX.Element;
  isActive?: boolean;
  badgeCount?: string;
  isCollapsed?: boolean;
  label?: boolean;
  submenu?: SidebarItem[];
}

interface Props {
  items: SidebarItem[];
}

const AppSidebarItem = (props: Props) => {
  const { items } = props;

  const renderSidebarItem = (item: SidebarItem) => {
    const hasSubmenu = !!item.submenu?.length;

    return (
      <Collapsible
        asChild
        defaultOpen={item.isActive}
        className={`group/collapsible`}
      >
        <SidebarMenuItem>
          <CollapsibleTrigger
            asChild
            className={cn("group rounded-xl hover:!bg-[#C3C2C1]")}
          >
            <SidebarMenuButton
              tooltip={item.name}
              className={cn(
                "justify-between rounded-xl",
                item.label ? "pointer-events-none" : "bg-background",
                item.url && "bg-transparent",
                item.submenu?.length &&
                  "data-[state=open]:bg-[#C3C2C1] data-[state=open]:hover:bg-[#C3C2C1]"
              )}
            >
              <div className="flex items-center gap-2">
                {!item.url && <div className="w-5">{item.icon}</div>}
                <span
                  className={item.label ? "text-secondary" : "text-primary"}
                >
                  {item.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {!!item.badgeCount && (
                  <div
                    className={cn(
                      "text-xs font-medium rounded-full px-[6px] py-[2px] min-w-[26px] text-center",
                      item.url ? "bg-sidebar-secondary" : "bg-accent"
                    )}
                  >
                    {item.badgeCount}
                  </div>
                )}

                {hasSubmenu && (
                  <ArrowDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                )}
              </div>
            </SidebarMenuButton>
          </CollapsibleTrigger>

          {hasSubmenu && (
            <CollapsibleContent>
              <SidebarMenuSub
                className={cn(!item.isCollapsed && "px-0 mx-0 border-none")}
              >
                {item.submenu?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.name}>
                    <SidebarMenu>{renderSidebarItem(subItem)}</SidebarMenu>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )}
        </SidebarMenuItem>
      </Collapsible>
    );
  };

  return (
    <SidebarGroup className="py-0 px-3">
      <SidebarMenu>
        {items.map((item, index) => (
          <Fragment key={index}>{renderSidebarItem(item)}</Fragment>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default AppSidebarItem;
