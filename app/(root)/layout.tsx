import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode}) => {
  return (
    <main className='root'>
      <div className='root-container'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
