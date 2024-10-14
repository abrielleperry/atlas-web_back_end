const express = require('express');
const fs = require('fs').promises;
const { join } = require('path');

const app = express();

app.listen(1245);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const db = req.query.db || 'database.csv';
  try {
    const students = await fs.readFile(join(__dirname, db), 'utf8');
    const trimmedStudents = students.trimEnd().split('\n').filter(Boolean);
    res.send(`This is the list of out students:\n\n${trimmedStudents.join('\n')}`);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).send('An error occured while processing the request.');
  }
});

module.exports = app;
