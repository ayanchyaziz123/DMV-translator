'use client'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const chapters = [
  { chapter: 4, title: 'Traffic Control', hasQuiz: true, href: '/chapter_4' },
  { chapter: 5, title: 'Intersections and Turns', hasQuiz: true, href: '/chapter_5' },
  { chapter: 6, title: 'Passing', hasQuiz: true, href: '/chapter_6' },
  { chapter: 7, title: 'Parallel Parking', hasQuiz: true, href: '/chapter_7' },
  { chapter: 8, title: 'Defensive Driving', hasQuiz: true, href: '/chapter_8' },
  { chapter: 9, title: 'Alcohol and Other Drugs', hasQuiz: true, href: '/chapter_9' },
  { chapter: 10, title: 'Special Driving Conditions', hasQuiz: true, href: '/chapter_10' },
  { chapter: 11, title: 'Sharing the Road', hasQuiz: true, href: '/chapter_11' },
  { title: 'If You Are in a Traffic Crash', hasQuiz: false },
  { title: 'Sign Chart: Road Signs You Must Know', hasQuiz: true, href: '/sign_chart' },
  { title: 'Take a final quiz from all chapters', hasQuiz: true, href: '/final_quiz' }
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pb-16"> {/* Increased padding-bottom */}
        <Head>
          <title>DMV Bangla</title>
        </Head>
        <h1 className="text-3xl font-bold mb-4 text-center mt-10">Welcome to DMV Bangla</h1>
        <p className="mb-6 mx-2">
  DMV Bangla ওয়েবসাইটটি একটি উপকারী সহায়ক প্রকাশনায়ন, যেখানে মানুষেরা তাদের গাড়ি চালানো সম্পর্কে জ্ঞান অর্জন করতে পারেন এবং লেখা পরীক্ষার জন্য প্রস্তুত হতে পারেন। এই ওয়েবসাইটে অনেকগুলি চ্যাপ্টার রয়েছে, যা গাড়ি চালানোর বিভিন্ন দিকের সাথে সম্পর্কিত তথ্য সরবরাহ করে। প্রতিটি চ্যাপ্টারে লেখা পরীক্ষা রয়েছে, যা মানুষকে তাদের ধারণাগুলি পরীক্ষা করার সুযোগ দেয়। উপকারী তথ্য এবং সহায়তা প্রদানের মাধ্যমে, DMV Bangla ওয়েবসাইটটি গাড়ি চালানোর সঠিক প্রক্রিয়া এবং সুরক্ষিত পথচালনার জন্য মানুষকে প্রস্তুত করে।
</p>

        <div className="overflow-x-auto mx-2">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Chapter</th>
                <th className="border border-gray-400 px-4 py-2">Quizzes</th>
              </tr>
            </thead>
            <tbody>
              {chapters.map((chapter, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100 text-gray-800" : ""}>
                  <td className="border border-gray-400 px-4 py-2">
                    {chapter.chapter && `Chapter ${chapter.chapter}: `}
                    {chapter.title}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 flex gap-2 justify-center">
                    {chapter.hasQuiz ? (
                      <>
                        <Link href={`${chapter.href}?language=bangla`} passHref>
                          <span className="text-blue-500 hover:underline cursor-pointer">Bangla</span>
                        </Link>
                        {/* <Link href={`${chapter.href}?language=hindi`} passHref>
                          <span className="text-blue-500 hover:underline cursor-pointer">Hindi</span>
                        </Link>
                        <Link href={`${chapter.href}?language=spanish`} passHref>
                          <span className="text-blue-500 hover:underline cursor-pointer">Spanish</span>
                        </Link> */}
                      </>
                    ) : (
                      <span className="text-gray-500">No quiz for this chapter</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr className='mt-16 mb-16'/>
      <Footer />
    </>
  );
};

export default HomePage;


