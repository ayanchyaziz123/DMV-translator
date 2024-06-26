"use client";
import React, { Suspense } from 'react';
import QuizComponent from '../../components/QuizComponent';
import banglaData from '../../data/sign_chart/banglaData';
import hindiData from '../../data/chapter_4/hindiData';
import { useSearchParams } from 'next/navigation'; // Correct import
import styles from '../style.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';


const Data = () => {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  return (
    <>
    <Navbar/>
    <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3158034660522527"
     crossorigin="anonymous"></script>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Chart</h1>
     
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
    <Footer/>
    </>
  );
};

const Sign_chart = () =>{
    return(
        <Suspense>
        <Data />
      </Suspense>
    )
}

export default Sign_chart;
