const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8')
    } catch (err) {
        throw new Error('Cannot load the database')
    }
}
const lines = data.trim().split('\n').filter(line => line);
const header = lines.shift();
const students = {};
lines.forEach((line) => {
    const [firstname, field] = line.split(',');
    if (!students[field]) {
        students[field] = [];
    }
    students[field].push(firstname);
})
const totalStudents = lines.length;
console.log(`Number of students: ${totalStudents}`)
for (const [field, names] of Object.entries(students)) {
    console.log(`Number of students in ${field}: ${names.length}. List ${names.join(',')}
`)
}



        if (lines.length === 0) {
        }
    const students = lines.slice(1).map(line => line.split(','));
    const totalStudents = students.length;
    }
}
