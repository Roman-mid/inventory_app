import { BarChart3, Package, Plus, Settings } from 'lucide-react';
import ILink from './ILink';
import { SidebarProps } from '../types/sidebar.type';

const Menu = ({ currentPath = '/dashboard' }: SidebarProps) => {
  return (
    <>
      {navigation.map((item, key) => {
        const IconComponent = item.icon;
        const isActive = currentPath === item.href;
        return (
          <ILink
            key={key}
            href={item.href}
            name={item.name}
            IconComponent={IconComponent}
            isActive={isActive}
          />
        );
      })}
    </>
  );
};

export default Menu;

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Add Product', href: '/add-product', icon: Plus },
  { name: 'Settings', href: '/settings', icon: Settings },
];
