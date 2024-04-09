import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


const chapters = [
  { chapter: 1, title: 'Driver Licenses', hasQuiz: false },
  { chapter: 1, title: 'How to Keep Your License', hasQuiz: false },
  { chapter: 1, title: 'Owning a Vehicle', hasQuiz: false },
  { chapter: 2, title: 'Traffic Control', hasQuiz: true },
  { chapter: 2, title: 'Intersections and Turns', hasQuiz: true },
  // Add all other chapters following the same structure
  { title: 'Sign Chart: Road Signs You Must Know', hasQuiz: true },
  { title: 'Take a final quiz from all chapters', hasQuiz: true }
];

const HomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Quiz App Home</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Quiz App</h1>
      <p className="mb-6">Explore chapters and their quizzes:</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Chapter</th>
              <th className="border border-gray-400 px-4 py-2">Quizzes</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-400 px-4 py-2">
                  {chapter.chapter && `chapter ${chapter.chapter}: `}
                  {chapter.title}
                </td>
                <td className="border border-gray-400 px-4 py-2 flex gap-2">
                  {chapter.hasQuiz ? (
                    <>
                       <Link className="text-blue-500 hover:underline" href="/chapter_4?language=bangla">
                       Bangla
                      </Link>
                      <Link className="text-blue-500 hover:underline" href="/chapter_4?language=hindi">
                        Hindi
                      </Link>
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
  );
};

export default HomePage;
