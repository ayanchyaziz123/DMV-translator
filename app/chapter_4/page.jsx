"use client";
import QuizComponent from '../../components/QuizComponent';
import banglaData from '../../data/chapter_4/banglaData';
import hindiData from '../../data/chapter_4/hindiData';
import { useSearchParams } from 'react-router-dom'; // Correct import
import { Suspense } from 'react';

// Import the CSS module at the top of your file
import styles from './Chapter_4.module.css';
import Navbar from '@/components/Navbar';

const Chapter_4 = () => {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className={styles.container}>
          <h1 className={styles.title}>Chapter 8</h1>
          {language === "bangla" ? (
            <div className={styles.quizWrapper}>
              <QuizComponent quizData={banglaData} />
            </div>
          ) : language === "hindi" ? (
            <div className={styles.quizWrapper}>
              <QuizComponent quizData={hindiData} />
            </div>
          ) : (
            <p className={styles.errorMessage}>Content not found..!</p>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default Chapter_4;
