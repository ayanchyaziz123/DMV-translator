import QuizComponent from '../../components/QuizComponent';
import quizData from '../../data/quizData';

const QuizPage = () => {
  return (
    <div>

      <h1 className='text-white'>Chapter 8</h1>
      <QuizComponent quizData={quizData}/>
    </div>
  );
};

export default QuizPage;
