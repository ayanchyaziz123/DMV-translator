"use client";
import Navbar from '@/components/Navbar';
import React from 'react';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-3xl leading-6 font-medium text-gray-900">Services</h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Our offered services.</p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Translation Services</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Translate documents, forms, and certificates to different languages.</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Interpretation Services</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">On-site or remote interpretation services for various languages.</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Language Proficiency Tests</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Assessment of language skills for driver's license applicants.</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Language Learning Resources</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Courses and materials to help individuals learn new languages.</dd>
                </div>
                {/* Add more services as needed */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
