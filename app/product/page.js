import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div >
      <div className='flex justify-center gap-10 text-2xl font-bold mt-10'>
        <Link href="/product/men"> Men's Products</Link>
        <Link href="/product/women"> Women's Products</Link>
      </div>  
    </div>
  );
}

export default page;
