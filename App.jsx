import React from 'react';
import QuizList from './components/QuizList';
import CreateQuizForm from './components/CreateQuizForm';

function App() {
  const handleCreateQuiz = (newQuiz) => {
    
  };

  return (
    <div>
      <h1>Quiz Platform</h1>
      <CreateQuizForm onCreateQuiz={handleCreateQuiz} />
      <QuizList />
    </div>
  );
}

export default App;
