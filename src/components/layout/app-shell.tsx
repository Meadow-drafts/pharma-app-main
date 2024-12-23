'use client';

import { ReactNode } from 'react';
import Sidebar from './sidebar';
import useIsCollapsed from 'src/hooks/use-is-collapsed';
import PrivateRoute from 'src/provider/PrivateRoute';

export default function AppShell({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  return (
    <PrivateRoute>
      <div className='relative h-full overflow-hidden bg-background'>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          id='content'
          className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
        >
          {children}
        </main>
      </div>

    </PrivateRoute>
  );
}
