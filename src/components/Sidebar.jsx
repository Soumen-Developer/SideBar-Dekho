import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


// icons
import { MdMenu } from "react-icons/md";
import { menuItems } from './menuItems';
import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';

export default function Sidebar({ sidebarState, setSidebarState }) {
  const [isPinned, setIsPinned] = useState(false);
  const sidebarRef = useRef(null);
  const reopenButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPinned) return;
      if (reopenButtonRef.current && reopenButtonRef.current.contains(event.target)) {
        return;
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarState(prev => (prev > 0 ? prev - 1 : 0));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef, setSidebarState, isPinned]);

  const getNavClasses = () => {
    const classes = ['shadow-md', 'p-2', 'flex', 'flex-col', 'duration-500', 'bg-red-600', 'text-white', 'z-40', 'fixed', 'h-screen'];
    
    if (sidebarState === 2) {
      classes.push('w-64');
    } else if (sidebarState === 1) {
      classes.push('w-16');
    } else {
      classes.push('w-0', 'p-0', 'opacity-0');
    }
    return classes.join(' ');
  };

  return (
    <>
      <div
        ref={reopenButtonRef}
        className={`fixed top-4 left-4 z-50 cursor-pointer text-black ${sidebarState === 0 ? 'block' : 'hidden'}`}
        onClick={() => setSidebarState(2)}
      >
        <MdMenu size={34} />
      </div>
      <nav ref={sidebarRef} className={getNavClasses()}>
        {/* Header */}
        <SidebarHeader sidebarState={sidebarState} setSidebarState={setSidebarState} />

        {/* Body */}
        <ul className='flex-1 flex flex-col overflow-hidden'>
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <li className='px-3 py-2 my-2 hover:bg-red-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                <div>{item.icons}</div>
                <p className={`${sidebarState !== 2 && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                <p
                  className={`${sidebarState === 2 && 'hidden'} absolute left-32 shadow-md rounded-md
                   w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                  `}
                >
                  {item.label}
                </p>
              </li>
            </Link>
          ))}
        </ul>
        {/* footer */}
        <SidebarFooter sidebarState={sidebarState} isPinned={isPinned} setIsPinned={setIsPinned} />
      </nav>
    </>
  );
}
