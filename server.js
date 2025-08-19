const express = require('express');
const app = express();
const port = 3001; // Changed from 3000 to 3001
const cors = require('cors');

app.use(cors());

const portfolioData = require('./data');

app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/who', (req, res) => {
  const aboutMe = {
    name: portfolioData.name,
    title: portfolioData.title,
    summary: portfolioData.summary
  };
  res.json(aboutMe);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});