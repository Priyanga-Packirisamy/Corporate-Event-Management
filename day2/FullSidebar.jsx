import React from 'react'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar from './Sidebar';
import { SidebarItem } from './Sidebar';
export default function FullSidebar() {
  return (
    <div className="flex">
        <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" alert />
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
        <SidebarItem icon={<Layers size={20} />} text="Events" />
        <SidebarItem icon={<Calendar size={20} />} text="Booked" />
        <SidebarItem icon={<Flag size={20} />} text="Payment History" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
    </div>
  )
}
