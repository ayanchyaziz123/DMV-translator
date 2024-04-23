"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';


const MockTest = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
        <h1 className='text-center'>Coming soon...</h1>
      </div>
      <Footer/>
    </>
  );
};

export default MockTest;
