const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8')
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (lines.length === 0) {
            throw new Error('Cannot load the database')
        }
    }
Number of students: NUMBER_OF_STUDENTS
Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
}
