import KreaLogo from '@/assets/Logo';
import React from 'react'

const Footer = () => {
  return (
    <div className="p-4   bg-neutral-900">
      <header className=" flex justify-between items-center ">
        {/* Logo Section */}
       <div className='flex gap-3'>
           <KreaLogo />
           <span>Krea AI</span>
       </div>
        {/* Right Section */}
          <p className="text-white text-sm">curated by <span className='font-bold'>Onyedikachi Emmanuel</span></p>
      </header>
    </div>
  );
}

export default Footer