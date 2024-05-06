// define a func to update student grades based on city
function updateStudentGradeByCity(students, city, newGrades) {
  // filter students array to only those with location matching specified city
  return students
    .filter((student) => student.location === city)
    // iterate over the filtered students to create a new array
    .map((student) => {
      // find the corresponding grade obj for current student from newGrades array
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // return new object that includes all properties of
      // current student and updates grade property
      // if matching grade obj is found use its grade if not set the grade to n/a
      return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
    });
}
export default updateStudentGradeByCity;
