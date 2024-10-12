const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line);
    lines.shift();

    const students = {};
    lines.forEach((line) => {
      const [firstname, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    console.log(`Number of students: ${lines.length}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
