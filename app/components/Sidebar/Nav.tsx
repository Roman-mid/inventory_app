import { SidebarProps } from '@/app/types/sidebar.type';
import Menu from './Menu';

const Nav = ({ currentPath = '/dashboard' }: SidebarProps) => {
  return (
    <nav className='space-y-1'>
      <div className='text-sm font-semibold text-gray-400 uppercase'>
        Iventory
      </div>
      <Menu currentPath={currentPath} />
    </nav>
  );
};

export default Nav;
