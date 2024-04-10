"use client";
import Navbar from '@/components/Navbar';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-3xl leading-6 font-medium text-gray-900">About Me</h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and experience.</p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Rahman, Azizur Ayan</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">New York City</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Interests</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Web development, New Technologies</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Hobbies</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Coding, Reading, Spending time with friends and family</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Education</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Master's in Computer Science, City University of New York</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
