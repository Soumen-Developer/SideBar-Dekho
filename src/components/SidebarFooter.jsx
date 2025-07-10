import React from 'react';
import { FaMapPin } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function SidebarFooter({ sidebarState, isPinned, setIsPinned }) {
  return (
    <div className="flex flex-col gap-3 px-3 py-2">
      {sidebarState > 0 && (
        <div
          className={`cursor-pointer ${isPinned ? 'text-black' : 'text-white'}`}
          onClick={() => setIsPinned(!isPinned)}
        >
          <FaMapPin size={24} />
        </div>
      )}
      <div className='flex items-center gap-2'>
        <div><FaUserCircle size={30} /></div>
        <div className={`leading-5 ${sidebarState !== 2 && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          <p>Soumen</p>
          <span className='text-xs'>soumen@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
