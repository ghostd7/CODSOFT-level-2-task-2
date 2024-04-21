import React, { useState } from 'react';
import axios from 'axios';

const CreateQuizForm = ({ onCreateQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/quizzes', { title, questions })
      .then(res => {
        onCreateQuiz(res.data);
        setTitle('');
        setQuestions([]);
      })
      .catch(err => {
        console.error('Error creating quiz:', err);
      });
  };

  return (
    <div>
      <h2>Create New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        {/* Implement logic to add questions */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateQuizForm;
