const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = lines.slice(1).map((line) => line.split(','));
      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);
      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!field[field]) {
          field[field] = [];
        }
        fields[field].push(student[0]);
      });
      for (const [field, name] of Object.entries(field)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    });
  });
}

module.exports = countStudents;
