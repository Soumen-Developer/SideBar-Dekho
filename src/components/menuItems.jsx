import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoLogoBuffer } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";

export const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: 'Home',
    path: '/'
  },
  {
    icons: <FaProductHunt size={30} />,
    label: 'Products',
    path: '/products'
  },
  {
    icons: <MdOutlineDashboard size={30} />,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    icons: <CiSettings size={30} />,
    label: 'Setting',
    path: '/setting'
  },
  {
    icons: <IoLogoBuffer size={30} />,
    label: 'Log',
    path: '/log'
  },
  {
    icons: <TbReportSearch size={30} />,
    label: 'Report',
    path: '/report'
  }
];
