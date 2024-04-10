"use client";
import QuizComponent from '../../components/QuizComponent';
import banglaData from '../../data/chapter_5/banglaData';
import hindiData from '../../data/chapter_4/hindiData';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'; // Correct import
// Import the CSS module at the top of your file
import styles from '../style.module.css';
import Navbar from '@/components/Navbar';

const Chapter_5 = () => {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  return (
    <>
    <Navbar/>
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
    </>
  );
};

export default Chapter_5;
