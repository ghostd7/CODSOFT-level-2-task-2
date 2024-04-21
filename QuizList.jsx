import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('/api/quizzes')
      .then(res => {
        setQuizzes(res.data);
      })
      .catch(err => {
        console.error('Error fetching quizzes:', err);
      });
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            {quiz.title}
            <button>Take Quiz</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
