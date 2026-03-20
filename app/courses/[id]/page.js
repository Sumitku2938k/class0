'use client' // This is a client component, it can use hooks and other client side features
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1 className='text-3xl underline'>{id} Course</h1>
        </div>
    );
}

export default page;
