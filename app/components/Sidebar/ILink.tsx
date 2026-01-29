import Link from 'next/link';
import React from 'react';

interface ILinkProps {
  href: string;
  isActive: boolean;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const ILink = ({ href, isActive, IconComponent, name }: ILinkProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${
        isActive
          ? 'bg-purple-100 text-gray-800'
          : 'hover:bg-gray-800 text-gray-300'
      }`}
    >
      <IconComponent className='w-5 h-5' />
      <span className='text-sm'>{name}</span>
    </Link>
  );
};

export default ILink;
