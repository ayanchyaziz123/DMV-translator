"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';


const MockTest = () => {
  return (
    <>
      <Navbar />
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3158034660522527"
     crossorigin="anonymous"></script>
    </Head>
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
        <h1 className='text-center'>Coming soon...</h1>
      </div>
      <Footer/>
    </>
  );
};

export default MockTest;
