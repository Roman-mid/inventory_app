'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Nav from './Nav';
import UserIcon from './UserIcon';

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className='fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10'>
      <Logo />
      <Nav currentPath={path} />
      <UserIcon />
    </div>
  );
};

export default Sidebar;
