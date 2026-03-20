'use client' // This is a client component, it can use hooks and other client side features
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const params = useParams();
    console.log(params.courseId);
    return (
        <div>
            <h1 className='text-3xl underline'>{params.courseId} Course</h1>
        </div>
    );
}

export default page;

