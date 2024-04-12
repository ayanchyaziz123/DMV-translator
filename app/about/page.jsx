"use client";
import Navbar from '@/components/Navbar';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          About DMV Bangla
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Welcome to DMV Bangla, your ultimate companion in navigating the complexities of DMV services and requirements. Our platform is dedicated to making DMV information accessible and understandable for everyone, no matter where you come from or what language you speak.
        </p>
        <p className="text-gray-700 mt-4 max-w-2xl">
          In a world that moves fast, we understand how important it is to have reliable, clear, and concise DMV information at your fingertips. Whether it's preparing for your driving test, understanding vehicle registration requirements, or simply translating DMV documents into your native language, DMV Bangla is here to assist.
        </p>
        <p className="text-gray-700 mt-4 max-w-2xl">
          Our mission is to bridge the language gap, providing a seamless and inclusive experience for all users. With our cutting-edge translation technology, comprehensive resources, and easy-to-navigate interface, we strive to empower you with the knowledge you need to tackle your DMV-related tasks with confidence.
        </p>
        <p className="text-gray-700 mt-4 max-w-2xl">
          Explore our wide range of services and discover how we're transforming the way you interact with DMV information. Welcome to a hassle-free DMV experience, tailored just for you.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
