const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

let quizzes = [];

app.use(bodyParser.json());

app.get('/api/quizzes', (req, res) => {
  res.json(quizzes);
});

app.post('/api/quizzes', (req, res) => {
  const { title, questions } = req.body;
  const newQuiz = { id: quizzes.length + 1, title, questions };
  quizzes.push(newQuiz);
  res.status(201).json(newQuiz);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
