"use client";
import React, { Suspense } from 'react';
import QuizComponent from '../../components/QuizComponent';
import banglaData from '../../data/chapter_4/banglaData';
import hindiData from '../../data/chapter_4/hindiData';
import spanishData from '../../data/chapter_4/spanishData';
import { useSearchParams } from 'next/navigation'; // Correct import
import styles from '../style.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head'; // Import Head from next/head



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
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3158034660522527"
     crossorigin="anonymous"></script>
    <h1 className={`${styles.title} sm:mx-4`}>Chapter 4: Traffic Control</h1>
<p className={`${styles.description} sm:mx-4 sm:mb-6}`}>দয়া করে মনে রাখুন: এই কুইজটি আপনাকে লিখিত পরীক্ষার প্রশ্নের ধরণগুলির জন্য প্রস্তুত করতে সাহায্য করার জন্য উদ্দেশ্যিত। আপনি DMV তে পরীক্ষা দেবার পরীক্ষা প্রশ্ন আলাদা হতে পারে।</p>

     
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
    <Footer/>
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
