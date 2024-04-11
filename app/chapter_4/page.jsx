"use client";
import React, { Suspense } from 'react';
import QuizComponent from '../../components/QuizComponent';
import banglaData from '../../data/chapter_4/banglaData';
import hindiData from '../../data/chapter_4/hindiData';
import spanishData from '../../data/chapter_4/spanishData';
import { useSearchParams } from 'next/navigation'; // Correct import
import styles from '../style.module.css';
import Navbar from '@/components/Navbar';

const Data = () => {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
    <h1 className={styles.title}>Chapter 4: Traffic Control</h1>
<p className={styles.description}>Chapter 4 delves into the essentials of traffic control, including signals, signs, and road markings, guiding safe and efficient road use</p>
     
        {language === "bangla" ? (
          <div className={styles.quizWrapper}>
            <QuizComponent quizData={banglaData} />
          </div>
        ) : language === "hindi" ? (
          <div className={styles.quizWrapper}>
            <QuizComponent quizData={hindiData} />
          </div>
        ) : language === "spanish" ? (
          <div className={styles.quizWrapper}>
            <QuizComponent quizData={spanishData} />
          </div>
        )  : (
          <p className={styles.errorMessage}>Content not found..!</p>
        )}
    </div>
    </>
  );
};

const Chapter_4 = () =>{
    return(
        <Suspense>
        <Data />
      </Suspense>
    )
}

export default Chapter_4;
