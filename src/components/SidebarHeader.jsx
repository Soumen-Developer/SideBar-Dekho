import React from 'react';
import logo from '../logo.png';
import { MdMenuOpen } from "react-icons/md";

export default function SidebarHeader({ sidebarState, setSidebarState }) {
  return (
    <div className='px-3 py-2 h-20 flex justify-between items-center'>
      <img src={logo} alt="Logo" className={`${sidebarState === 2 ? 'w-10' : 'w-0'} rounded-md`} />
      <div className="flex items-center gap-2">
        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${sidebarState !== 2 && 'rotate-180'}`}
          onClick={() => setSidebarState(prev => (prev === 2 ? 1 : 2))}
        />
      </div>
    </div>
  );
}
