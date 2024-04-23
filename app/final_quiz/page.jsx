"use client";
import React, { Suspense } from 'react';
import QuizComponent from '../../components/QuizComponent';
import banglaData_4 from '../../data/chapter_4/banglaData';
import banglaData_5 from '../../data/chapter_5/banglaData';
import banglaData_6 from '../../data/chapter_6/banglaData';
import banglaData_7 from '../../data/chapter_7/banglaData';
import banglaData_8 from '../../data/chapter_8/banglaData';
import banglaData_9 from '../../data/chapter_9/banglaData';
import banglaData_10 from '../../data/chapter_10/banglaData';
import banglaData_11 from '../../data/chapter_11/banglaData';
import hindiData from '../../data/chapter_4/hindiData';
import spanishData from '../../data/chapter_4/spanishData';
import { useSearchParams } from 'next/navigation'; // Correct import
import styles from '../style.module.css';
import Navbar from '@/components/Navbar';
import Head from 'next/head';




const Data = () => {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  const combinedBanglaData = [...banglaData_4, ...banglaData_5, ...banglaData_6, ...banglaData_7, ...banglaData_8, ...banglaData_9, ...banglaData_10, ...banglaData_11];


  return (
    <>
    <Navbar/>
    <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3158034660522527"
     crossorigin="anonymous"></script>
    </Head>
    <div className={styles.container}>
    <h1 className={styles.title}>Final Quiz</h1>

     
        {language === "bangla" ? (
          <div className={styles.quizWrapper}>
            <QuizComponent quizData={combinedBanglaData} />
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
